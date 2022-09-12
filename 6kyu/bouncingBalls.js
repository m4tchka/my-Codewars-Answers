"https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript"

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
        return -1;
    }
    let count = 0;
    while (h > window) {
        count++;
        h *= bounce;
        if (h > window) {
            count++;
        }
    }
    return count;
}

// Calculate how many bounces it will take before h <= windows
  // h must be STRICTLY GREATER than window
//  At each bounce, multiply h by bounce
  // Check that new h > windows 
  // Count REBOUND AS WELL by checking if new h after multiplying by bounce (h > windows)