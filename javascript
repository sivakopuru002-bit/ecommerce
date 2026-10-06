<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Request</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background: white;
            padding: 30px;
            border-radius: 12px;
            width: 400px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        input,
        textarea,
        button {
            width: 100%;
            margin-top: 10px;
            padding: 12px;
            box-sizing: border-box;
        }

        button {
            background: #007bff;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        button:hover {
            background: #0056b3;
        }

        pre {
            background: #eee;
            padding: 10px;
            margin-top: 20px;
            overflow-x: auto;
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>Send API Request</h2>

        <input
            type="text"
            id="name"
            placeholder="Enter your name"
        >

        <button onclick="sendRequest()">
            Send Request
        </button>

     
        

        <pre id="response">Response will appear here...</pre>
    </div>

    <script>
        async function sendRequest() {
    const response = await fetch("https://3h0jj9j1-5000.inc1.devtunnels.ms/ask_my_llm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            input: document.getElementById('name').value
        })
    });
    const data = await response.json();
    console.log(data.response);
}

    </script>

</body>
</html>