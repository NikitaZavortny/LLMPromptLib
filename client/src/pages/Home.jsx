import "flowbite"
import Prompt from "../components/Prompt";
import IO from "../components/IO";
function Home() {
    return (
        <>


            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 mt-6 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 class="mb-4 mt-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">LLM prompts library</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                        <div>
                            <IO />
                        </div>
                        <div>
                            <Prompt className="my-8"/>
                            <Prompt />
                            <Prompt />
                            <Prompt />
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Home;