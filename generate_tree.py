import os

def print_tree(directory, prefix=""):
    # List of folder names you want to completely ignore
    IGNORE_FOLDERS = {'node_modules', '.git', '.workspace', 'dist', '.vercel'}
    
    try:
        # Get all files and folders in the current directory
        items = sorted(os.listdir(directory))
    except PermissionError:
        return

    # Filter out items we want to ignore
    items = [item for item in items if item not in IGNORE_FOLDERS]
    
    for i, item in enumerate(items):
        path = os.path.join(directory, item)
        is_last = (i == len(items) - 1)
        
        # Determine the correct tree branch characters
        connector = "└── " if is_last else "├── "
        print(f"{prefix}{connector}{item}")
        
        # If the item is a directory, recursively print its contents
        if os.path.isdir(path):
            next_prefix = prefix + ("    " if is_last else "│   ")
            print_tree(path, next_prefix)

if __name__ == "__main__":
    # Get the current folder where the script is being run
    current_dir = os.getcwd()
    print(f"📁 {os.path.basename(current_dir)}")
    print_tree(current_dir)