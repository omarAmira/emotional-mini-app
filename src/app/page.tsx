'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────
type Screen = 1 | 2 | 3 | 4 | 'forget'

// ─── Box Content ──────────────────────────────────────────────────────────────
const BOXES = [
  {
    id: 1,
    icon: '🌹',
    content: (
      <div className="flex flex-col items-center gap-2">
        <div className="text-5xl">🌹</div>
        <p className="font-sans text-xs text-dusty text-center leading-relaxed mt-1">
          every day,<br />I miss your smile
        </p>
      </div>
    ),
  },
  {
    id: 2,
    icon: '💬',
    content: (
      <div className="flex flex-col items-center gap-2 px-2">
        <p className="font-serif italic text-xl text-ink leading-snug text-center">
          "Do you remember?"
        </p>
        <p className="font-sans text-xs text-dusty text-center">
          I will not forget.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    icon: '✨',
    content: (
      <div className="flex flex-col items-center gap-2">
        <div className="text-4xl animate-float">✨</div>
        <p className="font-sans text-xs text-dusty text-center leading-relaxed">
          Some moments<br />shine forever.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    icon: '💌',
    content: (
      <div className="px-3">
        <p className="font-serif italic text-base text-ink leading-snug text-center">
          "I wish you had known how much you meant to me."
        </p>
      </div>
    ),
  },
  {
    id: 5,
    icon: '…',
    content: (
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-px bg-rose/40 mb-1" />
        <p className="font-sans text-xs text-dusty/60 text-center italic">
          empty
        </p>
        <div className="w-8 h-px bg-rose/40 mt-1" />
      </div>
    ),
  },
  {
    id: 6,
    icon: '🔒',
    content: (
      <div className="flex flex-col items-center gap-2">
        <div className="text-4xl">🔒</div>
        <p className="font-sans text-xs text-dusty text-center leading-relaxed">
          Some things<br />remain closed.
        </p>
      </div>
    ),
    locked: true,
  },
]

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
  exit: { opacity: 0, y: -16, transition: { duration: 0.4 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.35 } },
}

// ─── Progress indicator ───────────────────────────────────────────────────────
function Progress({ screen }: { screen: Screen }) {
  const steps = [1, 2, 3, 4]
  const current = screen === 'forget' ? 4 : Number(screen)
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
      {steps.map((s) => (
        <motion.div
          key={s}
          className={`progress-dot ${current >= s ? 'active' : ''}`}
          initial={false}
          animate={{ scale: current === s ? 1.4 : 1, opacity: current >= s ? 1 : 0.35 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  )
}

// ─── Screen 1 ─────────────────────────────────────────────────────────────────
function Screen1({ onYes }: { onYes: () => void }) {
  const noRef = useRef<HTMLButtonElement>(null)

  const handleNoHover = useCallback(() => {
    const btn = noRef.current
    if (!btn) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const bw = btn.offsetWidth
    const bh = btn.offsetHeight
    const x = Math.random() * (vw - bw)
    const y = Math.random() * (vh - bh)
    btn.style.position = 'fixed'
    btn.style.left = `${x}px`
    btn.style.top = `${y}px`
    btn.style.zIndex = '100'
    btn.style.margin = '0'
  }, [])

  const handleNoTouch = useCallback(() => {
    const btn = noRef.current
    if (!btn) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const bw = btn.offsetWidth
    const bh = btn.offsetHeight
    const x = Math.random() * (vw - bw)
    const y = Math.random() * (vh - bh * 2)
    btn.style.position = 'fixed'
    btn.style.left = `${x}px`
    btn.style.top = `${y}px`
    btn.style.zIndex = '100'
    btn.style.margin = '0'
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 px-8 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blush/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-warm/60 blur-3xl pointer-events-none" />

      <motion.div
        className="text-center space-y-3"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.p
          className="font-sans text-xs tracking-[0.25em] uppercase text-dusty/70"
          variants={fadeUp}
          custom={0}
        >
          a question
        </motion.p>
        <motion.h1
          className="font-serif text-5xl md:text-6xl font-light text-ink leading-tight"
          variants={fadeUp}
          custom={1}
        >
          Hiba<br />do you <br />love me ?
        </motion.h1>
        <motion.div
          className="w-12 h-px bg-rose/50 mx-auto mt-4"
          variants={fadeUp}
          custom={2}
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-4 w-full max-w-xs"
        variants={fadeUp}
        custom={3}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          onClick={onYes}
          className="w-full py-4 bg-rose text-cream font-sans text-sm tracking-widest uppercase rounded-2xl shadow-lg shadow-rose/20"
          whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(201,132,122,0.3)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          yes
        </motion.button>

        <button
          ref={noRef}
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoTouch}
          className="w-full py-4 border border-dusty/30 text-dusty font-sans text-sm tracking-widest uppercase rounded-2xl transition-colors hover:border-dusty/60"
          style={{ transition: 'left 0.2s ease, top 0.2s ease' }}
        >
          No
        </button>
      </motion.div>
    </div>
  )
}

// ─── Screen 2 ─────────────────────────────────────────────────────────────────
function Screen2({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 px-8 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blush/30 blur-3xl pointer-events-none" />

      <motion.div
        className="text-center space-y-4"
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-sans text-xs tracking-[0.25em] uppercase text-dusty/70"
          variants={fadeUp} custom={0}
        >
          You said yes
        </motion.p>
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-light italic text-ink leading-tight"
          variants={fadeUp} custom={1}
        >
          Why are you<br />hesitating&nbsp;?
        </motion.h2>
        <motion.p
          className="font-sans text-sm text-dusty/80 leading-relaxed max-w-xs mx-auto pt-2"
          variants={fadeUp} custom={2}
        >
          Maybe we're all afraid<br />of what we truly feel.
        </motion.p>
        <motion.div
          className="w-12 h-px bg-rose/50 mx-auto"
          variants={fadeUp} custom={3}
        />
      </motion.div>

      <motion.button
        onClick={onContinue}
        className="px-10 py-4 bg-ink text-cream font-sans text-sm tracking-widest uppercase rounded-2xl"
        variants={fadeUp} custom={4}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.03, backgroundColor: '#3d241a' }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        Continue
      </motion.button>
    </div>
  )
}

// ─── Screen 3 ─────────────────────────────────────────────────────────────────
function Screen3({ onDone }: { onDone: () => void }) {
  const [opened, setOpened] = useState<Set<number>>(new Set())

  const toggle = (id: number) => {
    setOpened((prev) => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-5 py-8 relative overflow-y-auto overflow-x-hidden">
      <div className="absolute -top-10 right-0 w-48 h-48 rounded-full bg-blush/30 blur-3xl pointer-events-none" />

      <motion.div
        className="text-center mb-6 mt-4"
        initial="hidden" animate="visible"
      >
        <motion.p
          className="font-sans text-xs tracking-[0.25em] uppercase text-dusty/70 mb-2"
          variants={fadeUp} custom={0}
        >
          memories
        </motion.p>
        <motion.h2
          className="font-serif text-3xl font-light text-ink"
          variants={fadeUp} custom={1}
        >
          Open what you want.
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto flex-1">
        {BOXES.map((box, i) => {
          const isOpen = opened.has(box.id)
          return (
            <motion.div
              key={box.id}
              className="gift-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => toggle(box.id)}
            >
              <motion.div
                className="gift-box-inner min-h-[130px] p-3"
                animate={isOpen ? { scale: [1, 1.04, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  {!isOpen ? (
                    <motion.div
                      key="closed"
                      className="flex flex-col items-center gap-2"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="text-3xl">{box.locked ? '🔒' : '🎁'}</div>
                      <p className="font-sans text-xs text-dusty/60">touch me</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, scale: 0.85, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full"
                    >
                      {box.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <motion.button
        onClick={onDone}
        className="mt-8 px-8 py-3.5 border border-dusty/30 text-dusty font-sans text-xs tracking-widest uppercase rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ borderColor: 'rgba(155,123,121,0.7)', scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        Continue
      </motion.button>
    </div>
  )
}

// ─── Screen 4 ─────────────────────────────────────────────────────────────────
function Screen4({ onForget }: { onForget: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-warm/50 blur-3xl pointer-events-none" />

      <motion.div
        className="text-center space-y-4"
        initial="hidden" animate="visible"
      >
        <motion.p
          className="font-sans text-xs tracking-[0.25em] uppercase text-dusty/70"
          variants={fadeUp} custom={0}
        >
          one last thing
        </motion.p>
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight"
          variants={fadeUp} custom={1}
        >
          Click here<br />to forget.
        </motion.h2>
        <motion.p
          className="font-sans text-sm text-dusty/80 leading-relaxed max-w-xs mx-auto pt-1"
          variants={fadeUp} custom={2}
        >
          What if it were possible?
        </motion.p>
      </motion.div>

      <motion.button
        onClick={onForget}
        className="px-10 py-4 bg-rose text-cream font-sans text-sm tracking-widest uppercase rounded-2xl shadow-lg shadow-rose/20"
        variants={fadeUp} custom={3}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.04, boxShadow: '0 20px 40px rgba(201,132,122,0.3)' }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        Forget
      </motion.button>
    </div>
  )
}

// ─── Forget Screen ─────────────────────────────────────────────────────────────
function ForgetScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-8">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-light italic text-ink leading-tight">
          If only it <br/>were that easy…
        </h2>
        <div className="w-12 h-px bg-rose/50 mx-auto" />
        <p className="font-sans text-sm text-dusty/80 leading-relaxed max-w-xs mx-auto">
          But some things<br />are not forgotten.
        </p>
      </motion.div>

      <motion.button
        onClick={onRestart}
        className="mt-4 px-8 py-3 border border-dusty/30 text-dusty font-sans text-xs tracking-widest uppercase rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Start over
      </motion.button>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [screen, setScreen] = useState<Screen>(1)
  const [forgetting, setForgetting] = useState(false)

  const handleForget = () => {
    setForgetting(true)
    setTimeout(() => {
      setForgetting(false)
      setScreen('forget')
    }, 1200)
  }

  const handleRestart = () => {
    setScreen(1)
  }

  return (
    <main className="relative min-h-screen bg-cream overflow-hidden select-none">

      {/* Progress */}
      <AnimatePresence>
        {screen !== 'forget' && (
          <motion.div
            key="progress"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Progress screen={screen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* White fade overlay for "forget" */}
      <AnimatePresence>
        {forgetting && (
          <motion.div
            key="fade"
            className="fixed inset-0 bg-cream z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* Screens */}
      <AnimatePresence mode="wait">
        {screen === 1 && (
          <motion.div key="s1" variants={scaleIn} initial="hidden" animate="visible" exit="exit">
            <Screen1 onYes={() => setScreen(2)} />
          </motion.div>
        )}
        {screen === 2 && (
          <motion.div key="s2" variants={scaleIn} initial="hidden" animate="visible" exit="exit">
            <Screen2 onContinue={() => setScreen(3)} />
          </motion.div>
        )}
        {screen === 3 && (
          <motion.div key="s3" variants={scaleIn} initial="hidden" animate="visible" exit="exit">
            <Screen3 onDone={() => setScreen(4)} />
          </motion.div>
        )}
        {screen === 4 && (
          <motion.div key="s4" variants={scaleIn} initial="hidden" animate="visible" exit="exit">
            <Screen4 onForget={handleForget} />
          </motion.div>
        )}
        {screen === 'forget' && (
          <motion.div key="sf" variants={scaleIn} initial="hidden" animate="visible" exit="exit">
            <ForgetScreen onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
