
import RecommandGames from '@/modules/RecommandGames';
import CategoriesModule from '@/modules/CategoriesModule';

export default function Home(props: any) {
  return (
    <div>
      <RecommandGames start={0} end={98} />
      <CategoriesModule />

      {/* -------------- SEO -------------  */}

      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mt-6">Unblocked Games - Play 400+ Free Online Games</h1>
      </div>

      <div className="container mx-auto p-6">
        <p className="text-lg text-gray-700">
          <strong>Unblocked-Games.cc</strong> is your go-to platform for playing over 400 unblocked games directly in your browser without any downloads. Whether you're at school, home, or work, explore a variety of genres such as car unblocked games, puzzle unblocked games, and adventure unblocked games, all accessible from any network. These unblocked games provide endless entertainment for players of all ages.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Popular Unblocked Game Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-medium text-gray-700">Car Unblocked Games</h3>
            <p className="text-gray-600 mt-2">Race through high-speed tracks and test your driving skills in games like "Madalin Stunt Cars" and "City Racer," the best unblocked games for car lovers.</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-medium text-gray-700">Fighting Unblocked Games</h3>
            <p className="text-gray-600 mt-2">Master powerful moves and battle it out in intense unblocked fighting games such as "Stickman Fighter" and "Punch Boxing."</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-medium text-gray-700">Clicker Unblocked Games</h3>
            <p className="text-gray-600 mt-2">Engage in addictive clicker unblocked games like "Clicker Heroes" and "Idle Miner Tycoon" where every click counts.</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-medium text-gray-700">Adventure Unblocked Games</h3>
            <p className="text-gray-600 mt-2">Explore new worlds and face exciting challenges in adventure unblocked games like "Fireboy and Watergirl" or "Papa's Freezeria."</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-medium text-gray-700">Two Player Unblocked Games</h3>
            <p className="text-gray-600 mt-2">Play with friends in competitive two-player unblocked games such as "Stickman Party" and "Basketball Legends."</p>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-medium text-gray-700">Strategy Unblocked Games</h3>
            <p className="text-gray-600 mt-2">Test your tactical skills in unblocked strategy games like "Goodgame Empire" and "Kingdom Rush."</p>
          </div>
        </div>
      </div>



      <div className="container mx-auto p-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions (FAQ) About Unblocked Games</h2>

        <div className="bg-gray-100 p-4 rounded shadow-lg mb-4">
          <h3 className="text-lg font-medium text-gray-700">How do I play unblocked games on Unblocked-Games.cc?</h3>
          <p className="text-gray-600 mt-2">Simply click on any unblocked game to start playing instantly in your browser. No download or registration is required for these unblocked games.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow-lg mb-4">
          <h3 className="text-lg font-medium text-gray-700">Can I play unblocked games at school or work?</h3>
          <p className="text-gray-600 mt-2">Yes! All games on Unblocked-Games.cc are unblocked, meaning you can access them from school or workplace networks without any issues.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow-lg mb-4">
          <h3 className="text-lg font-medium text-gray-700">Do I need a VPN to play unblocked games?</h3>
          <p className="text-gray-600 mt-2">No, you don't need a VPN to play these unblocked games. They are accessible directly without any additional tools.</p>
        </div>
      </div>



    </div>
  )
}
