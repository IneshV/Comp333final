# AI-Persona Audio Generator

## Overview
The AI-Persona Audio Generator is a project aimed at revolutionizing the way we interact with readings. This project allows for the generation of audio that mimics the voice of a specific individual, based on training with audio recordings. Our goal is to first establish an accurate voice generator, before extending its functionality to reading PDFs. Finally, we aim to implement this on a website and, if time allows, an iOS mobile application.

## Proposed Features
- **Voice Cloning Engine**: Implement a deep learning model capable of analyzing and replicating a person's voice with a small sample size.
- **PDF Reading Capability**: Integrate the voice cloning engine to convert text from PDFs into spoken audio, maintaining the original speaker's voice characteristics.
- **Web Platform**: Develop a user-friendly website that allows users to upload voice samples and PDFs, and receive audio outputs.

## Stakeholders and Intended Users
The intended users of the AI-Persona Audio Generator are individuals who seek a personalized auditory experience, such as listening to books or documents in a familiar voice. Pre-requisites for users include the ability to provide clear voice recordings for the initial training phase.

Stakeholders for this project include me, potential investors, and the end-users who stand to benefit from a more personalized audio experience.

## Additional Notes
**Web app must be run in Google Chrome.**

Due to the heavy computational costs of generating voice samples, you cannot run our program locally. However, we utilized Google Colab's remote servers with a flask back end to get around this. This allows for us to use Google's GPUs for generating.

Further, this repository includes a folder called extra files; These files are what we had been using originally but, since our AI voice generation is done through are using to colab are now outdated. We chose to include them as they were key in our learning process, though are not needed in order to run the website. Hence, they are neatly hidden away in this folder.

**A sample pdf, (sample.pdf), is provided** 

## How to run the project

**Link must be opened in Google Chrome.**

Follow the directions in this link to access the website:  
{https://colab.research.google.com/drive/1tizUgtVcLpn8lttYHPhnofAzaL4YGRW5?usp=sharing}  
Further direction are within the notebook

Demo Video:
https://drive.google.com/file/d/1a1QoCtQehWSnlV5C5fvIQI6Z835om1as/view

Once the website is brought up, in the top right corner you can toggle between the voice training function and PDF reader feature.

### Voice Training
- Enter a name that you would like to save your audio as.
- Press the 'Start Recording' button (you may need to allow microphone access)
- Once you are done press 'Stop Recording'  
The trained voice should appear among the preset names in the red 'Voices' column on the left
### PDF Reader
- Press 'Choose File' to bring up the finder. Navigate to the desired plain text PDF and open it.
- Select 'Upload' to bring the text to the page.
- Use your mouse to select text from the page (it's advised to only select as much as a sentence. Longer selections will result in longer wait time or may cause the app to crash)
- Choose a voice from the 'Voices' section
- Press 'Read Selected Text'  
Your selected voice should read the specific text to you aloud

## Future Goals
The biggest issue with this program is the huge cost of creating voice samples.  Right now, samples are generated with the lowest quality to ensure that files can be sent and received without Google Colab crashing.  I would be very interested to look into other open-source voice generators to see how they compare.  Learning how algorithms sacrifice accuracy for simplicity is super fascinating and I would love to delve into this.  Other features we could add are more flexibility when generating the audio such as the ability to take a longer time for a higher-quaility audio file.  Another feature recommended by a peer was the ability to play these files at two times speed.
