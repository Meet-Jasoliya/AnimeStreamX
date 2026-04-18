/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AIRecommendations } from './components/AIRecommendations';
import { WatchParty } from './components/WatchParty';
import { TrendingSeries } from './components/TrendingSeries';
import { ContinueWatching } from './components/ContinueWatching';
import { FanDiscussions } from './components/FanDiscussions';
import { CharacterClips } from './components/CharacterClips';
import { LanguageDownloads } from './components/LanguageDownloads';
import { Comments } from './components/Comments';

import { StoreProvider } from './store';
import { VideoModal } from './components/VideoModal';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-[#0B0F19] text-white font-sans antialiased selection:bg-brand-orange selection:text-white pb-20">
        <Navbar />
        <div id="home"><Hero /></div>
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8 relative z-10 -mt-8 md:-mt-20">
          <div id="recommendations" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-1 lg:col-span-3">
              <AIRecommendations />
            </div>
            <div className="col-span-1">
              <WatchParty />
            </div>
          </div>

          <div id="trending" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-1 lg:col-span-3">
              <TrendingSeries />
            </div>
            <div className="col-span-1">
              <ContinueWatching />
            </div>
          </div>

          <div id="community" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FanDiscussions />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2">
              <CharacterClips />
            </div>
            <div className="col-span-1">
              <LanguageDownloads />
            </div>
          </div>

          <div className="w-full">
            <Comments />
          </div>
        </main>
        <VideoModal />
      </div>
    </StoreProvider>
  )
}
