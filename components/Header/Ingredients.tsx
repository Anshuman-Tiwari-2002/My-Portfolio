import hero from "data/hero";
import Typewriter from "typewriter-effect";

const Ingredients = () => (
  <code className="h-[115px] text-center leading-loose">
    <Typewriter
      options={{ delay: 40 }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2000)
          .typeString("<span class='text-blue-500'>const </span>")
          .typeString("anshuman: Array<")
          .typeString("<span class='text-green-500'>Ingredient</span>")
          .typeString("> ")
          .typeString("<span class='text-blue-500'>= </span>")
          .typeString("[<br>")
          .typeString("<span class='pl-5'></span>")
          .typeString(`<span class='text-red-500'>${hero.ingredients[0]}</span>, `)
          .typeString(`<span class='text-red-500'>${hero.ingredients[1]}</span>, `)
          .typeString(`<span class='text-red-500'>${hero.ingredients[2]}</span>,<br>`)
          .typeString("<span class='pl-5'></span>")
          .typeString(`<span class='text-red-500'>${hero.ingredients[3]}</span>, `)
          .typeString(`<span class='text-red-500'>${hero.ingredients[4]}</span>, `)
          .typeString(`<span class='text-red-500'>${hero.ingredients[5]}</span>,<br>`)
          .typeString("];")
          .start();
      }}
    />
  </code>
);

export default Ingredients;
