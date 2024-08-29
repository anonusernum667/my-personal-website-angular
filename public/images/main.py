import os

def rename_images():
    # Get the current working directory (the folder where the script is run)
    folder_path = os.getcwd()

    # List all files in the folder
    files = os.listdir(folder_path)

    # Filter only image files (e.g., jpg, jpeg, png, gif, bmp)
    image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp'))]

    # Sort the images to ensure they are renamed in a consistent order
    image_files.sort()

    # First pass: Rename each image to a temporary name
    temp_names = []
    for index, filename in enumerate(image_files):
        # Temporary name to avoid conflicts (using a unique prefix)
        temp_name = f"temp_{index}.tmp"
        old_path = os.path.join(folder_path, filename)
        temp_path = os.path.join(folder_path, temp_name)

        os.rename(old_path, temp_path)
        temp_names.append(temp_name)

    # Second pass: Rename each temporary file to the final name
    for index, temp_name in enumerate(temp_names):
        new_name = f"img({index + 1}).jpg"
        temp_path = os.path.join(folder_path, temp_name)
        new_path = os.path.join(folder_path, new_name)

        os.rename(temp_path, new_path)
        print(f"Renamed: {temp_name} -> {new_name}")

# Run the rename function
rename_images()
