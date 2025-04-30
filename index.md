<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>hexAI - Dynamic Relativity</title>
  <style>
    body { background: #0a0a0a; color: #fff; font-family: sans-serif; text-align: center; padding: 2rem; }
    canvas { background: #111; border: 1px solid #444; margin-top: 1rem; }
  </style>
</head>
<body>
  <h1>Dynamic Relativity: ∀f, 𝓘(f) ⇒ ExtendedRelativity(f)</h1>
  <p>Enter a formula and see its dynamic transformation:</p>
  <input id="inputFormula" value="E = mc^2" />
  <button onclick="transformFormula()">Transform</button>
  <canvas id="canvas" width="600" height="400"></canvas>

  <script src="matrixlib.js"></script>
  <script src="operators.js"></script>
  <script src="app.js"></script>
</body>
</html>
