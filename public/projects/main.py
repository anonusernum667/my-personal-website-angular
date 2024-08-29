import os


def rename_images():
    # Get the current working directory (the folder where the script is run)
    folder_path = os.getcwd()

    # List all files in the folder
    files = os.listdir(folder_path)

    # Filter only image files (e.g., jpg, png)
    image_files = [f for f in files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp'))]

    # Sort the images to ensure they are renamed in a consistent order
    image_files.sort()
    # Rename each image
    for index, filename in enumerate(image_files):
        # New name with the format img(1).jpg, img(2).jpg, etc.
        new_name = f"project{index + 1}.jpg"

        # Full old and new file paths
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)

        # Rename the file
        os.rename(old_path, new_path)
        print(f"Renamed: {filename} -> {new_name}")


# Run the rename function
rename_images()
