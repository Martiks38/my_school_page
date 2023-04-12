import Head from 'next/head'
import { LayoutPage } from '@/Layout/LayoutPage'
import { TimeBlock } from '@/components/TimeBlock'
import { schedules } from '@/const'

export default function Schedules() {
	return (
		<>
			<Head>
				<title>Estudiantes | EET N°477</title>
				<meta name="description" content="" />

				<meta property="og:title" content="Estudiantes | EET N°477" />
				<meta property="og:description" content="" />
			</Head>
			<LayoutPage>
				<main className="grow w-full max-w-primaryContent mx-auto  mt-8 p-4 border border-[#0002]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">Horarios de cursado</h1>
					<strong className="block mb-5">
						En los casos en que no figure el horario de curso se irá completando la información
						progresivamente.
					</strong>
					<div className="grid grid-cols-3 gap-10">
						{schedules.map(({ courses, id, year }) => {
							return <TimeBlock key={id} courses={courses} year={year} />
						})}
					</div>
				</main>
			</LayoutPage>
		</>
	)
}