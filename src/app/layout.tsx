import "@/styles/global.scss"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='description'
					content='Студия разработки эффективных IT продуктов'
				/>
				<meta
					name='google-site-verification'
					content='EkSOFdA72V6bNQlOsQk5ywyJuEHFLDNSAVrIaOR10-k'
				/>
				<meta name='yandex-verification' content='08c7f4ebd6d390ab' />
				<title>@BitBusters</title>

				{/* Yandex.Metrika counter */}
				<script
					type='text/javascript'
					dangerouslySetInnerHTML={{
						__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(94423540, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
        });`,
					}}
				/>
				<noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/94423540'
							style={{ position: "absolute", left: "-9999px" }}
							alt=''
						/>
					</div>
				</noscript>
				{/* /Yandex.Metrika counter */}
			</head>
			<body>{children}</body>
		</html>
	)
}
