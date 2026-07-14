from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():

    data = request.get_json()
    expression = data.get("expression", "")

    try:
        result = str(eval(expression))
    except:
        result = "Error"

    return jsonify({
        "result": result
    })

if __name__ == "__main__":
    app.run(debug=True)
