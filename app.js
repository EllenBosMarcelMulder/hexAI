function transformFormula() {
  const f = document.getElementById('inputFormula').value;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const Tf = T(f);
  const Rf = R(f);
  const Sf = S(f);

  ctx.fillStyle = "#00ffcc";
  ctx.fillText("Input: " + f, 20, 40);
  ctx.fillText("T(f): " + Tf, 20, 80);
  ctx.fillText("R(f): " + Rf, 20, 120);
  ctx.fillText("S(f): " + Sf, 20, 160);
  ctx.fillText("𝓘(f) = T + R + S: " + (Tf + " + " + Rf + " + " + Sf), 20, 200);
}
