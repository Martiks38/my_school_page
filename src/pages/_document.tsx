import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<link rel="apple-touch-icon" href="/logo310.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}