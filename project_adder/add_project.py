import tkinter as tk
from tkinter import filedialog, messagebox, simpledialog
import json
import os
import shutil
from datetime import datetime

# Paths (adjust if your structure changes)
PROJECTS_JSON = os.path.join('..', 'backend', 'projects.json')
STATIC_DIR = os.path.join('..', 'backend', 'static')

LANGUAGES = ['Python', 'Java', 'Other']
MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]
CURRENT_YEAR = datetime.now().year
YEARS = [str(y) for y in range(CURRENT_YEAR, CURRENT_YEAR-20, -1)]

class ProjectAdder:
    def __init__(self, root):
        self.root = root
        self.root.title('Add Project to Portfolio')
        self.image_path = None
        self.download_path = None
        self.download_url = None

        tk.Label(root, text='Title:').grid(row=0, column=0, sticky='e')
        self.title_entry = tk.Entry(root, width=40)
        self.title_entry.grid(row=0, column=1)

        tk.Label(root, text='Description:').grid(row=1, column=0, sticky='e')
        self.desc_entry = tk.Entry(root, width=40)
        self.desc_entry.grid(row=1, column=1)

        tk.Label(root, text='Language:').grid(row=2, column=0, sticky='e')
        self.lang_var = tk.StringVar(value=LANGUAGES[0])
        self.lang_menu = tk.OptionMenu(root, self.lang_var, *LANGUAGES)
        self.lang_menu.grid(row=2, column=1, sticky='w')

        tk.Label(root, text='Month:').grid(row=3, column=0, sticky='e')
        self.month_var = tk.StringVar(value=MONTHS[0])
        self.month_menu = tk.OptionMenu(root, self.month_var, *MONTHS)
        self.month_menu.grid(row=3, column=1, sticky='w')

        tk.Label(root, text='Year:').grid(row=4, column=0, sticky='e')
        self.year_var = tk.StringVar(value=YEARS[0])
        self.year_menu = tk.OptionMenu(root, self.year_var, *YEARS)
        self.year_menu.grid(row=4, column=1, sticky='w')

        tk.Label(root, text='Image:').grid(row=5, column=0, sticky='e')
        self.img_label = tk.Label(root, text='No file selected')
        self.img_label.grid(row=5, column=1, sticky='w')
        tk.Button(root, text='Select Image', command=self.select_image).grid(row=5, column=2)

        # Download section
        tk.Label(root, text='Download (optional):').grid(row=6, column=0, sticky='e')
        self.download_label = tk.Label(root, text='No file or URL')
        self.download_label.grid(row=6, column=1, sticky='w')
        tk.Button(root, text='Select File', command=self.select_download_file).grid(row=6, column=2)
        tk.Button(root, text='Enter URL', command=self.enter_download_url).grid(row=6, column=3)

        tk.Button(root, text='Add Project', command=self.add_project).grid(row=7, column=1, pady=10)

    def select_image(self):
        path = filedialog.askopenfilename(
            title='Select Project Image',
            filetypes=[('Image Files', '*.png;*.jpg;*.jpeg;*.gif;*.bmp')]
        )
        if path:
            self.image_path = path
            self.img_label.config(text=os.path.basename(path))

    def select_download_file(self):
        path = filedialog.askopenfilename(
            title='Select Download File',
            filetypes=[('All Files', '*.*')]
        )
        if path:
            self.download_path = path
            self.download_url = None
            self.download_label.config(text=os.path.basename(path))

    def enter_download_url(self):
        url = tk.simpledialog.askstring('Download URL', 'Enter download URL:')
        if url:
            self.download_url = url
            self.download_path = None
            self.download_label.config(text=url)

    def add_project(self):
        title = self.title_entry.get().strip()
        desc = self.desc_entry.get().strip()
        lang = self.lang_var.get()
        month = self.month_var.get()
        year = self.year_var.get()
        img_path = self.image_path

        if not (title and desc and lang and month and year and img_path):
            messagebox.showerror('Error', 'Please fill all fields and select an image.')
            return

        img_filename = os.path.basename(img_path)
        dest_img_path = os.path.join(STATIC_DIR, img_filename)
        try:
            shutil.copy(img_path, dest_img_path)
        except Exception as e:
            messagebox.showerror('Error', f'Failed to copy image: {e}')
            return

        # Load existing projects
        try:
            with open(PROJECTS_JSON, 'r', encoding='utf-8') as f:
                projects = json.load(f)
        except Exception:
            projects = []

        # Handle download
        download_value = None
        if self.download_path:
            download_filename = os.path.basename(self.download_path)
            dest_download_path = os.path.join(STATIC_DIR, download_filename)
            try:
                shutil.copy(self.download_path, dest_download_path)
                download_value = download_filename
            except Exception as e:
                messagebox.showerror('Error', f'Failed to copy download file: {e}')
                return
        elif self.download_url:
            download_value = self.download_url

        # Add new project
        new_project = {
            'title': title,
            'description': desc,
            'image': img_filename,
            'language': lang,
            'month': month,
            'year': year
        }
        if download_value:
            new_project['download'] = download_value
        projects.append(new_project)

        # Save back
        try:
            with open(PROJECTS_JSON, 'w', encoding='utf-8') as f:
                json.dump(projects, f, indent=2)
            messagebox.showinfo('Success', 'Project added!')
            self.root.destroy()
        except Exception as e:
            messagebox.showerror('Error', f'Failed to save project: {e}')

if __name__ == '__main__':
    root = tk.Tk()
    app = ProjectAdder(root)
    root.mainloop() 