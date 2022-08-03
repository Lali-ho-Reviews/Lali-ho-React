const FcItem = (props) => {
    return (
        <div class="flex flex-col pb-3 pt-1" key={props.data.ff_id}>
            <div
            class="relative flex flex-col md:flex-row md:space-x-5 space-y-3  rounded-xl shadow-lg p-3 max-w-s md:max-w-lg mx-auto border border-fgrey bg-fgrey">

                <div class="w-full md:w-1/6 bg-fgrey grid place-items-center">
                    <img src="/startscreen.jpeg" alt="ff14 loading screen backgorund" class="rounded-xl" />
                </div>
                <div class="w-full md:w-2/3 bg-fgrey flex flex-col space-y-2 p-3">
                    <div class="flex justify-between item-center">
                    <p class="text-gray-400 text-xs hidden md:block">Server: {props.data.server}</p>
                    {props.data.slogan && <div class="flex items-center">
                        <p class="text-blue-400 font-bold text-xs ml-1">
                        5 reviews 
                        </p>
                    </div>}
                    
                    <div class=" px-3 py-1 rounded-full text-xs font-s text-gray-400 hidden md:block">
                        Lodestone ID: {props.data.ff_id} </div>
                    </div>
                    <h3 class="font-black text-gray-300 md:text-l text-l ">{props.data.name}</h3>
                    {props.data.slogan && <p class="md:text-m text-gray-500 text-base">{props.data.slogan}</p>}
                    <p class="text-s font-black text-blue-400">
                        <a href={"/Fc/" + props.data.id}>See Reviews</a> 
                    </p>
                </div>
            </div>
        </div>
    )



}

export default FcItem