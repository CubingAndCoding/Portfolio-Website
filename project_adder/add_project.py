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

        # Create main frame
        self.main_frame = tk.Frame(root)
        self.main_frame.pack(padx=20, pady=20, fill='both', expand=True)

        # Title
        tk.Label(self.main_frame, text='Title:').grid(row=0, column=0, sticky='e', padx=(0, 10), pady=5)
        self.title_entry = tk.Entry(self.main_frame, width=40)
        self.title_entry.grid(row=0, column=1, columnspan=3, sticky='ew', pady=5)

        # Description
        tk.Label(self.main_frame, text='Description:').grid(row=1, column=0, sticky='e', padx=(0, 10), pady=5)
        self.desc_entry = tk.Entry(self.main_frame, width=40)
        self.desc_entry.grid(row=1, column=1, columnspan=3, sticky='ew', pady=5)

        # Language
        tk.Label(self.main_frame, text='Language:').grid(row=2, column=0, sticky='e', padx=(0, 10), pady=5)
        self.lang_var = tk.StringVar(value=LANGUAGES[0])
        self.lang_menu = tk.OptionMenu(self.main_frame, self.lang_var, *LANGUAGES)
        self.lang_menu.grid(row=2, column=1, sticky='w', pady=5)

        # Month
        tk.Label(self.main_frame, text='Month:').grid(row=3, column=0, sticky='e', padx=(0, 10), pady=5)
        self.month_var = tk.StringVar(value=MONTHS[0])
        self.month_menu = tk.OptionMenu(self.main_frame, self.month_var, *MONTHS)
        self.month_menu.grid(row=3, column=1, sticky='w', pady=5)

        # Year
        tk.Label(self.main_frame, text='Year:').grid(row=4, column=0, sticky='e', padx=(0, 10), pady=5)
        self.year_var = tk.StringVar(value=YEARS[0])
        self.year_menu = tk.OptionMenu(self.main_frame, self.year_var, *YEARS)
        self.year_menu.grid(row=4, column=1, sticky='w', pady=5)

        # Image
        tk.Label(self.main_frame, text='Image:').grid(row=5, column=0, sticky='e', padx=(0, 10), pady=5)
        self.img_label = tk.Label(self.main_frame, text='No file selected', fg='gray')
        self.img_label.grid(row=5, column=1, sticky='w', pady=5)
        tk.Button(self.main_frame, text='Select Image', command=self.select_image).grid(row=5, column=2, padx=(10, 5), pady=5)

        # Download section
        tk.Label(self.main_frame, text='Download (optional):').grid(row=6, column=0, sticky='e', padx=(0, 10), pady=5)
        self.download_label = tk.Label(self.main_frame, text='No file or URL', fg='gray')
        self.download_label.grid(row=6, column=1, sticky='w', pady=5)
        tk.Button(self.main_frame, text='Select File', command=self.select_download_file).grid(row=6, column=2, padx=(10, 5), pady=5)
        tk.Button(self.main_frame, text='Enter URL', command=self.enter_download_url).grid(row=6, column=3, padx=(5, 0), pady=5)

        # Buttons frame
        button_frame = tk.Frame(self.main_frame)
        button_frame.grid(row=7, column=0, columnspan=4, pady=20)

        tk.Button(button_frame, text='Add Project', command=self.add_project, bg='#4CAF50', fg='white', font=('Arial', 10, 'bold')).pack(side='left', padx=(0, 10))
        tk.Button(button_frame, text='Reset Form', command=self.reset_form, bg='#FF9800', fg='white').pack(side='left', padx=(0, 10))
        tk.Button(button_frame, text='Exit', command=self.root.destroy, bg='#f44336', fg='white').pack(side='left')

        # Configure grid weights
        self.main_frame.columnconfigure(1, weight=1)

    def select_image(self):
        path = filedialog.askopenfilename(
            title='Select Project Image',
            filetypes=[('Image Files', '*.png;*.jpg;*.jpeg;*.gif;*.bmp')]
        )
        if path:
            self.image_path = path
            self.img_label.config(text=os.path.basename(path), fg='black')

    def select_download_file(self):
        path = filedialog.askopenfilename(
            title='Select Download File',
            filetypes=[('All Files', '*.*')]
        )
        if path:
            self.download_path = path
            self.download_url = None
            self.download_label.config(text=os.path.basename(path), fg='black')

    def enter_download_url(self):
        url = simpledialog.askstring('Download URL', 'Enter download URL:')
        if url:
            self.download_url = url
            self.download_path = None
            self.download_label.config(text=url, fg='black')

    def reset_form(self):
        """Reset all form fields to their default values"""
        self.title_entry.delete(0, tk.END)
        self.desc_entry.delete(0, tk.END)
        self.lang_var.set(LANGUAGES[0])
        self.month_var.set(MONTHS[0])
        self.year_var.set(YEARS[0])
        self.image_path = None
        self.download_path = None
        self.download_url = None
        self.img_label.config(text='No file selected', fg='gray')
        self.download_label.config(text='No file or URL', fg='gray')
        
        # Focus on title entry for quick entry
        self.title_entry.focus()

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
            messagebox.showinfo('Success', f'Project "{title}" added successfully!\n\nYou can now add another project or click Exit to close.')
            self.reset_form()  # Reset form for next project
        except Exception as e:
            messagebox.showerror('Error', f'Failed to save project: {e}')

if __name__ == '__main__':
    root = tk.Tk()
    root.geometry('600x400')
    root.resizable(True, True)
    app = ProjectAdder(root)
    root.mainloop() 