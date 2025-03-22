import os
import re

# Sample input tree as a multi-line string.
tree_str = r"""
portfolio-frontend/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AboutMe.tsx
│   │   ├── Timeline.tsx
│   │   ├── Projects.tsx
│   │   ├── BlenderShowcase.tsx
│   │   ├── GodotShowcase.tsx
│   │   ├── HighlightProject.tsx
│   │   ├── CurrentlyWorkingOn.tsx
│   │   ├── Certifications.tsx
│   │   ├── Skills.tsx
│   │   └── Patents.tsx
│   ├── aframe.d.ts            // For A-Frame JSX declarations
│   ├── App.tsx
│   ├── index.tsx
│   └── global.d.ts            // (Optional) additional global types
├── package.json
└── tsconfig.json

"""

def parse_tree(tree: str):
    """
    Parses the tree string and yields tuples of (depth, name).
    Depth is inferred from the number of tree branch characters ("│") before the branch marker.
    Lines with "..." are skipped.
    """
    lines = tree.strip().splitlines()
    for line in lines:
        # Remove inline comments (everything after " //")
        line = line.split(" //")[0]
        # Use regex to remove tree drawing characters (├──, └──, etc.)
        # Split on these markers to isolate the prefix and the name.
        parts = re.split(r"[├└]── ", line)
        if len(parts) == 1:
            # Likely the root line without any markers.
            name = parts[0].strip()
            depth = 0
        else:
            # The prefix part (which may contain one or more "│") helps determine the depth.
            prefix = parts[0]
            name = parts[1].strip()
            depth = prefix.count("│")
        # Skip placeholders
        if name == "..." or "..." in name:
            continue
        yield depth, name

def create_tree(tree: str, base_dir: str):
    """
    Creates directories and files under base_dir based on the parsed tree.
    """
    # We'll use a stack to keep track of the directory at each depth.
    path_stack = {}
    for depth, name in parse_tree(tree):
        # Determine full path
        if depth == 0:
            # Root element.
            full_path = os.path.join(base_dir, name.rstrip("/"))
            path_stack[0] = full_path
        else:
            parent_dir = path_stack.get(depth - 1, base_dir)
            full_path = os.path.join(parent_dir, name.rstrip("/"))
            path_stack[depth] = full_path

        if name.endswith("/"):
            # It's a directory.
            os.makedirs(full_path, exist_ok=True)
            print(f"Created directory: {full_path}")
        else:
            # It's a file. Ensure the parent directory exists.
            parent = os.path.dirname(full_path)
            os.makedirs(parent, exist_ok=True)
            # Create an empty file if it does not exist.
            if not os.path.exists(full_path):
                with open(full_path, "w") as f:
                    pass
                print(f"Created file: {full_path}")
            else:
                print(f"File already exists: {full_path}")

if __name__ == "__main__":
    # You can change the base directory if needed.
    base_directory = os.getcwd()
    create_tree(tree_str, base_directory)
    print("Directory structure created successfully!")
