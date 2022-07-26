"""
    Archivo para generar rapidamente las traducciones.
        Es necesario aclarar a quienes modifican los archivos de traducciones que cada vez que se quiera hacer un cambio
        sigan con la misma modalidad de generación de textos del DER_textos_web.xlsx

    Actualmente traduce las siguientes pestañas:
        - 'Prensa_EN'
        - 'Vivos_EN'
        - 'Equipo_EN'


    ------------
    Aclaraciones:
        No está optimizado ni el drive ni el json inicial de la web
        1 - JSON INICIAL DE LA WEB. Lo que es:
                "lives": {
                    "title_1": "POLITICXS EN TWITTER ",
                    "subtitle_1": "",
                    "title_2": "Incubadora de Ciudades Comunes",
                    "subtitle_2": "",                
                    ...
                }
            Debería ser:
                "lives": [
                    {
                        "title": "POLITICXS EN TWITTER ",
                        "subtitle": "",
                    }, {
                        "title": "Incubadora de Ciudades Comunes",
                        "subtitle": "",                    
                    }            
                ]      
            Pero se entiende para que los contenidos volcados dentro de ./content la necesidad de indexar por nombre. Se podría poner un id en cada object

        2 - Hay algunas sheets que toman webID , otras que se toman con el id ficticio de la row
"""

import json
import pandas as pd
import numpy as np


class DataWeb:

    data = {}

    # Estaría bueno conectarlo con google drive
    PATHFILE = "DER_textos_web.xlsx"
    
    def open_file(self, sheet_name, skiprows):
        return pd.read_excel(
                self.PATHFILE, 
                sheet_name=sheet_name, 
                skiprows=skiprows, 
                engine='openpyxl'
            ).dropna(axis=0, how='all')

    def collect_press(self):
        df = self.open_file("Prensa_EN", 1)
        COLUMNS = {"Titulo": "title", "Nombre": "name", "subtitutlo": "subtitle"}
        df = df.rename(columns=COLUMNS)
        self.data['press'] = {
            "title": "Press",
        }
        for i in range(0, len(df)):
            for c in COLUMNS.values():
                value_name = df[c][i]
                self.data['press'][f'{c}_{i+1}'] = value_name

    def collect_lives(self):
        df = self.open_file("Vivos_EN", 2)
        COLUMNS = {"Titulo": "title", "Textos": "description", "Subtitulo": "subtitle"}
        df = df.rename(columns=COLUMNS)
        df['description'] = df['description'].fillna("")
        df['subtitle'] = ""
        self.data['lives'] = {}
        for i in range(0, len(df)):
            for c in COLUMNS.values():
                value_name = df[c][i]
                self.data['lives'][f'{c}_{i+1}'] = value_name

    def collect_team(self):
        df = self.open_file("Equipo_EN", 1)
        df['title'] = df['Unnamed: 1'] + " " + df['Unnamed: 2']
        df['subtitle'] = df['Unnamed: 3']
        COLUMNS = ['title', 'subtitle']
        self.data['team'] = {}
        for i in range(0, len(df)):
            if not np.isnan(df['webID'][i]):
                for c in COLUMNS:
                    value_name = df[c][i]
                    self.data['team'][f'{c}_{df["webID"][i].astype(int)}'] = value_name


    def exec(self):
        self.collect_press()
        self.collect_lives()
        self.collect_team()
        return self.data




data = DataWeb()
json_string = data.exec()

with open("data.json", "w") as i:
   json.dump(json_string, i, indent=4, ensure_ascii=False)
