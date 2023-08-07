from flask import Flask, request, jsonify

app = Flask(__name__)

# In a real system, data would be stored in a database.
infrastructure = [
    {"id": 1, "name": "Road Network", "status": "Good", "last_inspection": "2023-06-30"},
    {"id": 2, "name": "Water Supply", "status": "Fair", "last_inspection": "2023-06-15"},
    # Add more infrastructure data as needed.
]

@app.route('/api/infrastructure', methods=['GET'])
def get_infrastructure():
    return jsonify(infrastructure)

@app.route('/api/inspect_infrastructure', methods=['POST'])
def inspect_infrastructure():
    data = request.get_json()
    infrastructure_id = data.get('infrastructure_id')
    status = data.get('status')
    # Code to update the infrastructure status and last inspection date (e.g., update the database).

    return jsonify({'message': 'Infrastructure inspection recorded successfully'})

if __name__ == '__main__':
    app.run()

