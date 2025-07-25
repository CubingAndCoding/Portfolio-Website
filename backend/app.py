print("running")
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__, static_folder='static')
CORS(app, origins=['https://portfolio-frontend-chi-olive.vercel.app', 'https://alaqmar-portfolio.vercel.app', 'https://alaqmar53.vercel.app'])

PROJECTS_FILE = os.path.join(os.path.dirname(__file__), 'projects.json')
@app.route('/projects')
def get_projects():
    with open(PROJECTS_FILE, 'r') as f:
        projects = json.load(f)
    return jsonify(projects)

@app.route('/static/<path:filename>')
def serve_image(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000) 