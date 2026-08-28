"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, Github, Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { methodologies, profile, projects } from "@/lib/portfolio-data"
import { CinematicSection } from "@/components/ui/cinematic-section"

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55, ease: "easeOut" as const } }
const nav = [{ label: "首页", href: "#home" }, { label: "关于我", href: "#about" }, { label: "项目", href: "#projects" }, { label: "方法论", href: "#methodologies" }, { label: "联系我", href: "#contact" }]

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <motion.div {...fade} className="flex max-w-3xl flex-col gap-4"><p className="font-mono text-xs uppercase tracking-[0.24em] text-primary/70">{eyebrow}</p><h2 className="text-balance font-serif text-5xl italic leading-none text-primary md:text-7xl">{title}</h2><p className="max-w-2xl text-pretty text-base leading-relaxed text-primary/70 md:text-lg">{copy}</p></motion.div>
}

export function Portfolio() {
  return <div className="relative min-h-screen text-primary">
    <header className="sticky top-0 z-40 px-3 pt-3 md:px-6 md:pt-5">
      <nav aria-label="主导航" className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/30 bg-background/35 px-4 py-2 backdrop-blur-xl md:px-6">
        <Link href="#home" className="font-serif text-xl italic">杨惠雯</Link>
        <div className="hidden items-center gap-6 md:flex">{nav.map((item) => <Link key={item.href} href={item.href} className="text-sm text-primary/70 transition-colors hover:text-primary">{item.label}</Link>)}</div>
        <Button asChild size="sm" variant="iconButton"><Link href="#contact">联系我<ArrowUpRight data-icon="inline-end" /></Link></Button>
      </nav>
    </header>

    <main className="mx-auto flex max-w-7xl flex-col px-5 pb-10 md:px-10">
      <section id="home" className="flex min-h-[calc(100dvh-5rem)] scroll-mt-24 flex-col justify-end gap-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-nowrap items-center justify-center gap-2.5 whitespace-nowrap">{["AI 创变者计划社长", "学院辩论队副队长", "两次创业者", "语文报杯全国一等奖"].map((tag) => <Badge key={tag} variant="outline" className="border-primary/30 text-primary whitespace-nowrap">{tag}</Badge>)}</div>
          <div className="flex w-full max-w-5xl items-center justify-center gap-1 md:gap-3 [perspective:1400px]">
            <div className="flex items-center justify-end">{[..."把AI的可能"].map((ch, i, arr) => { const ratio = i / Math.max(arr.length - 1, 1); const scale = 0.55 + (1 - ratio) * 0.35; const translateZ = (1 - ratio) * 35; return <span key={`L-${i}`} className="inline-block font-serif italic text-primary" style={{ transform: `translateZ(${translateZ}px) scale(${scale}) rotateY(18deg)`, transformOrigin: "right center", fontSize: "clamp(2rem, 5.5vw, 4.2rem)", lineHeight: 1, marginLeft: i === 0 ? 0 : `calc(${0.01 * (1 - ratio)}em)` }}>{ch}</span>; })}</div>
            <img src="/digital-human.gif" alt="数字人" className="h-[18rem] w-auto shrink-0 object-contain self-center md:h-[24rem] lg:h-[28rem]" />
            <div className="flex items-center justify-start">{[..."做成真实产品"].map((ch, i, arr) => { const ratio = i / Math.max(arr.length - 1, 1); const scale = 0.55 + ratio * 0.35; const translateZ = ratio * 35; return <span key={`R-${i}`} className="inline-block font-serif italic text-primary" style={{ transform: `translateZ(${translateZ}px) scale(${scale}) rotateY(-18deg)`, transformOrigin: "left center", fontSize: "clamp(1.8rem, 5vw, 3.8rem)", lineHeight: 1, marginRight: i === arr.length - 1 ? 0 : `calc(${0.01 * ratio}em)` }}>{ch}</span>; })}</div>
          </div>
          <div className="flex flex-wrap justify-center gap-3"><Button asChild size="lg" variant="iconButton" shine><Link href="#projects">查看项目<ArrowDown data-icon="inline-end" /></Link></Button><Button asChild size="lg"><Link href="#contact">聊聊机会<Mail data-icon="inline-end" /></Link></Button></div>
        </motion.div>
      </section>

      <section className="scroll-mt-24">
        <CinematicSection lines={["你好，我是" + profile.name, ...profile.statement]} />
      </section>

      <section id="about" className="scroll-mt-24 py-24 md:py-32">
        <SectionTitle eyebrow="About / 01" title="理解人，也理解模型" copy="我关注 AI 能力如何进入真实任务：从用户洞察、机会判断、体验设计，到评测体系与增长闭环" />
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <motion.div {...fade} className="glass-card flex flex-col justify-between gap-12 p-6 md:col-span-7 md:p-8"><div className="flex items-center gap-3"><BriefcaseBusiness className="size-5" /><span className="text-sm">教育与方向</span></div><div className="flex flex-col items-center gap-1"><p className="font-serif text-3xl italic md:text-5xl">上海理工大学</p><p className="font-serif text-3xl italic md:text-5xl">储能科学与工程</p></div></motion.div>
          <motion.div {...fade} className="glass-card flex flex-col gap-6 p-6 md:col-span-5 md:p-8"><Sparkles className="size-5" /><p className="text-sm text-primary/60">我的产品观</p><p className="text-pretty text-xl leading-relaxed">工程背景给我系统思维，AI 工具给我落地能力，产品方法论让两者变成可被复用的判断</p></motion.div>
          {[{ value: "3", label: "个 AI 项目实践" }, { value: "15+", label: "篇方法论沉淀" }, { value: "8", label: "个 PM Skill 工具" }, { value: "12 周", label: "AI 产品实习" }].map((item) => <motion.div key={item.label} {...fade} className="glass-card flex flex-col gap-2 p-6 md:col-span-3"><strong className="font-serif text-4xl italic">{item.value}</strong><span className="text-sm text-primary/60">{item.label}</span></motion.div>)}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-24 md:py-32">
        <SectionTitle eyebrow="Selected Work / 02" title="从问题到结果" copy="三个项目，覆盖企业知识、求职教育与内容增长，我不仅展示做了什么，也展示为什么这样做" />
        <div className="mt-12 flex flex-col gap-5">{projects.map((project) => <motion.div key={project.slug} {...fade}><Link href={`/projects/${project.slug}`} className="group block"><Card className="glass-card overflow-hidden border-border/30 bg-background/35 text-primary transition-transform duration-300 group-hover:-translate-y-1"><CardHeader className="gap-4 p-6 md:p-8"><div className="flex items-start justify-between gap-4"><span className="font-mono text-xs text-primary/55">PROJECT {project.index}</span><ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></div><div className="grid gap-4 md:grid-cols-2 md:items-end"><div><CardTitle className="font-serif text-4xl italic leading-none md:text-6xl">{project.title}</CardTitle><CardDescription className="mt-3 text-primary/60">{project.subtitle}</CardDescription></div><p className="text-pretty leading-relaxed text-primary/75">{project.summary}</p></div></CardHeader><CardContent className="flex flex-wrap gap-2 px-6 md:px-8">{project.tags.map((tag) => <Badge key={tag} variant="outline" className="border-primary/25 text-primary/75">{tag}</Badge>)}</CardContent><CardFooter className="flex justify-between gap-4 px-6 pb-6 md:px-8 md:pb-8"><span className="text-sm text-primary/55">{project.role}</span><span className="text-right text-sm font-medium">{project.result}</span></CardFooter></Card></Link></motion.div>)}</div>
      </section>

      <section id="methodologies" className="scroll-mt-24 py-24 md:py-32">
        <SectionTitle eyebrow="Frameworks / 03" title="让判断可以复用" copy="方法论不是漂亮的流程图，而是在信息不完整时帮助团队做出一致、可解释的选择" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">{methodologies.map((method) => <motion.div key={method.slug} {...fade}><Link href={`/methodologies/${method.slug}`} className="group block h-full"><Card className="glass-card flex h-full flex-col border-border/30 bg-background/35 text-primary transition-transform duration-300 group-hover:-translate-y-1"><CardHeader className="gap-5"><div className="flex items-center justify-between"><span className="font-mono text-xs text-primary/55">{method.index}</span><ArrowUpRight className="size-5" /></div><CardTitle className="text-balance font-serif text-3xl italic leading-none">{method.title}</CardTitle><CardDescription className="font-mono text-xs uppercase tracking-wider text-primary/50">{method.englishTitle}</CardDescription></CardHeader><CardContent className="flex flex-1 flex-col gap-5"><p className="leading-relaxed text-primary/70">{method.summary}</p><div className="flex flex-col gap-2">{method.steps.map((step) => <div key={step.title} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary/60" /><span>{step.title}</span></div>)}</div></CardContent><CardFooter><span className="text-sm text-primary/60">查看完整框架</span></CardFooter></Card></Link></motion.div>)}</div>
      </section>

      <section id="contact" className="scroll-mt-24 py-24 md:py-32">
        <motion.div {...fade} className="glass-card flex flex-col gap-10 p-6 md:p-12"><div className="flex flex-col gap-5"><p className="font-mono text-xs uppercase tracking-[0.24em] text-primary/60">Contact / 04</p><h2 className="whitespace-nowrap font-serif text-3xl italic leading-none md:text-5xl lg:text-6xl">总有一天我会创造出改变世界的产品！</h2></div><div className="flex flex-col justify-between gap-8 border-t border-border/25 pt-8 md:flex-row md:items-end"><div className="grid gap-4 text-primary/70 sm:grid-cols-2"><a className="flex items-center gap-2 transition-colors hover:text-primary" href={`tel:${profile.phone}`}><Phone className="size-4" />{profile.phone}</a><a className="flex items-center gap-2 transition-colors hover:text-primary" href={`mailto:${profile.email}`}><Mail className="size-4" />{profile.email}</a><a className="flex items-center gap-2 transition-colors hover:text-primary" href={profile.github} target="_blank" rel="noreferrer"><Github className="size-4" />{profile.githubName}</a><p className="flex items-center gap-2"><MessageCircle className="size-4" />微信：{profile.wechat}</p><p className="flex items-center gap-2 sm:col-span-2"><MapPin className="size-4" />base 上海（可接受异地）</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg" variant="iconButton"><a href={profile.github} target="_blank" rel="noreferrer">GitHub<ArrowUpRight data-icon="inline-end" /></a></Button></div></div></motion.div>
      </section>
    </main>
    <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 pb-8 text-xs text-primary/50 md:flex-row md:px-10"><p>© 2026 {profile.name}. Designed with intent.</p></footer>
  </div>
}
