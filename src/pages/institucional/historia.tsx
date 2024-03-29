import Head from 'next/head'
import Image from 'next/image'
import { LayoutPage } from '@/Layout/LayoutPage'
import { schoolHistory } from '@/content/schoolHistory'
import SchoolImage from '@/assets/images/eighty-year-old-school.webp'

export default function HistoryInstitution(): JSX.Element {
	return (
		<>
			<Head>
				<title>Historia | EET N°477</title>
				<meta property="og:title" content="Historia | EET N°477" />
			</Head>
			<LayoutPage>
				<main className="flex flex-row grow w-full max-w-primaryContent mx-auto mt-8 xl:border border-[#0002]">
					<div className="max-w-[95ch] px-4 md:px-20 py-4 border-r xl:border-[#0005]">
						<h1 id="inicio" className="mb-10 text-4xl font-robotoMono font-bold">
							Historia
						</h1>
						<h2 className="mb-5 text-2xl font-robotoMono font-semibold">
							Escuela de Educación Técnico Profesional N°477 “Combate&nbsp;de&nbsp;San&nbsp;Lorenzo”
						</h2>
						<div className="mb-14 [&>div:not(:last-child)]:mb-9 [&>div:not(:last-child)]:border-b-2 [&>div:not(:last-child)]:border-[#0003]">
							{Object.values(schoolHistory).map(({ id, paragraphs, title }) => {
								return (
									<div key={id}>
										<h3 className="mb-2 text-xl">{title}</h3>
										{paragraphs.map((paragraph, index) => {
											return (
												<p key={index} className="mb-3.5 text-base">
													{paragraph}
												</p>
											)
										})}
										<a
											href="#inicio"
											className="block w-fit mb-2.5 ml-auto px-4 py-2 font-semibold text-lg hover:underline text-[#010061]"
										>
											Volver
										</a>
									</div>
								)
							})}
						</div>
						<Image
							src={SchoolImage}
							alt="Imagen conmemorativa de los 80 años de la Escuela de Enseñanza Técnica N°477"
							width={390}
							height={270}
							className="block max-w-[43.75rem] w-full h-auto mx-auto"
						/>
					</div>
					<div className="hidden lg:block px-20 py-4"></div>
				</main>
			</LayoutPage>
		</>
	)
}
