import Card from "../components/Card"

function PortfolioPage() {
  return (

    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-200 p-9">

      <h1 className=" text-center text-2xl font-semibold ">Welcome To <span className="text-orange-600">Portfolio
      </span>
      </h1>
      <h3></h3>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center">
        <Card
          heading="Todo App"
          description="This Todo app, built with React.js and styled using Tailwind CSS, utilizes React Context for state management and local storage for task persistence."
          buttonLabel="Checkout"
          buttonLink="https://todo-app-by-talha.vercel.app/"
        />
        <Card
          heading="Countdown Timer"
          description="A countdown timer application built with Next.js and ShadCN, featuring a user-friendly interface for setting timers with real-time updates and a modern design."
          buttonLabel="Checkout"
          buttonLink="/https://countdown-timer-by-talha.vercel.app/"
        />
        <Card
          heading="Cuurency Converter"
          description="A Currency Converter application built with React.js and styled using Tailwind CSS, utilizing a currency exchange API for real-time conversion rates between different currencies."
          buttonLabel="Checkout"
          buttonLink="https://currency-converter-by-talha.vercel.app/"
        />
        <Card
          heading="Background Changer"
          description="A simple React.js project that dynamically changes the background color of a web page using the useState hook, allowing users to switch colors with a button click."
          buttonLabel="Checkout"
          buttonLink="https://background-changer-by-talha.vercel.app/"
        />
      </div>
    </div>
  )
}

export default PortfolioPage