from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/tarjetas')
def tarjetas():
    return render_template('tarjetas.html')

if __name__ == '__main__':
    app.run(debug=True)