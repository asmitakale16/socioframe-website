from pathlib import Path

# Folders to ignore
IGNORE_DIRS = {
    "node_modules",
    ".git",
    "__pycache__",
    ".next",
    "dist",
    "build"
}

def print_tree(directory, prefix=""):
    directory = Path(directory)

    items = sorted(
        [item for item in directory.iterdir()
         if item.name not in IGNORE_DIRS],
        key=lambda x: (x.is_file(), x.name.lower())
    )

    for index, item in enumerate(items):
        is_last = index == len(items) - 1
        connector = "└── " if is_last else "├── "

        print(prefix + connector + item.name)

        if item.is_dir():
            extension = "    " if is_last else "│   "
            print_tree(item, prefix + extension)

if __name__ == "__main__":
    root_folder = "."  # Change to your project path if needed
    print(Path(root_folder).resolve().name)
    print_tree(root_folder)