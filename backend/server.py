from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
# Use CORS to allow cross origin resource sharing - i.e. allow the frontend to make requests to the backend
CORS(app)

# sort the numbers into fizz, buzz, fizzbuzz or the number itself
# brief states if the number is a multiple of 3, it should return fizz
# extending that logic, should check if a number is divisible by 3, without remainder, so use modulo (%) operator
# use the same logic for buzz
# if the number is a multiple of 3 and 5, it must be a multiple of 15, so chec if its divisible by 15. 
# if the number is not divisible by 3 or 5, return the number itself

def sort_outcome(n):
    # must check for 15 first, as 15 is a multiple of 3 and 5
    if n % 15 == 0:
        return "FizzBuzz"
    elif n % 5 == 0:
        return "Buzz"
    elif n % 3 == 0 :
        return "Fizz"
    else:
        return n
    

@app.route('/fizzbuzz')
def generate_numbers():
    result = [sort_outcome(n) for n in range(1, 101)]
# return the result as a json object
    return jsonify(result)

# run the app

if __name__ == '__main__':
    app.run(debug=True)