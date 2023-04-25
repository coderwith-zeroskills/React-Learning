import { useEffect, useState } from "react";

export default function MainBmi() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [category, setCategory] = useState("");
  const [bmi, setBmi] = useState();

  const a = [
    {
      cat: "underweight",
      min: 0,
      max: 18.5,
    },
    {
      cat: "normal",
      min: 18.6,
      max: 24.9,
    },
    {
      cat: "overWeight",
      min: 25,
      max: 29.9,
    },
    {
      cat: "obesity",
      min: 30,
      max: 34.9,
    },
    {
      cat: "death",
      min: 35,
      max: 40,
    },
    {
      cat: "df",
      min: 40.1,
      max: 1000,
    },
  ];
  useEffect(() => {
    a.map((val) => {
      if (bmi > val.min && bmi < val.max) return setCategory(val.cat);
    });
  }, [bmi]);
  const clickHandler = () => {
    const h = (height / 100) * (height / 100);
    setBmi(weight / h);
  };

  return (
    <>
      <div>
        <label>Enter Height</label>
        <input
          type="number"
          placeholder="Height(cm)"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Enter weight</label>
        <input
          type="number"
          placeholder="Weight(kg)"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
      </div>
      <input type="button" onClick={clickHandler} value="click" />
      <p>
        BMI(kb/m<sup>2</sup>):{bmi}({category})
      </p>
    </>
  );
}
