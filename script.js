const d1e1 = document.querySelector(".display1");
      const d2e1 = document.querySelector(".display2");
      const re1 = document.querySelector(".result");
      const ne1 = document.querySelectorAll(".number");
      const oe1 = document.querySelectorAll(".operation");
      const ee1 = document.querySelector(".equal");
      const ce1 = document.querySelector(".all-clear");
      const cle1 = document.querySelector(".last-entity-clear");

      let dis1num = "";
      let dis2num = "";
      let res = null;
      let lastop = "";
      let havedot = false;

      ne1.forEach((num) => {
        num.addEventListener("click", (e) => {
          if (e.target.innerText === "." && !havedot) {
            havedot = true;
          } else if (e.target.innerText === "." && havedot) {
            return;
          }
          dis2num += e.target.innerText;
          d2e1.innerText = dis2num;
        });
      });

      oe1.forEach((op) => {
        op.addEventListener("click", (e) => {
          if (!dis2num) return;
          havedot = false;
          const operation = e.target.innerText;
          if (dis1num && dis2num && lastop) {
            mathOperation();
          } else {
            res = parseFloat(dis2num);
          }
          clearDisplay(operation);
          lastop = operation;
        });
      });

      function clearDisplay(operation = "") {
        dis1num += dis2num + " " + operation + " ";
        d1e1.innerText = dis1num;
        d2e1.innerText = "";
        dis2num = "";
        re1.innerText = res;
      }

      function mathOperation() {
        if (lastop === "/") {
          res = parseFloat(res) / parseFloat(dis2num);
        } else if (lastop === "X") {
          res = parseFloat(res) * parseFloat(dis2num);
        } else if (lastop === "-") {
          res = parseFloat(res) - parseFloat(dis2num);
        } else if (lastop === "+") {
          res = parseFloat(res) + parseFloat(dis2num);
        } else if (lastop === "%") {
          res = parseFloat(res) % parseFloat(dis2num);
        }
      }

      ee1.addEventListener("click", (e) => {
        if (!dis1num || !dis2num) return;
        havedot = false;
        mathOperation();
        clearDisplay();
        d2e1.innerText = res;
        dis2num = res;
        dis1num = "";
      });

      ce1.addEventListener("click", () => {
        d1e1.innerText = "";
        d2e1.innerText = "";
        dis1num = "";
        dis2num = "";
        res = null;
        lastop = "";
        havedot = false;
      });

      cle1.addEventListener("click", () => {
        d2e1.innerText = "";
        dis2num = "";
      });
      