from flask import Flask, request, jsonify
import os
from deep_learning import generate_audio_from_pdf


app = Flask(__name__)

# Define a route to read text aloud
@app.route('/read_aloud', methods=['POST'])
def read_text_aloud(text, voice_model_folder_path):
    """
    Receives a text from the client and generates audio from it.
    
    - Extracts text from the request.
    - Generates audio from the text.
    - Returns the audio data as a response.
    """
    pass
