<script>
	import Header from '$lib/components/layout/header.svelte';
	import Breadcrumbs from '$lib/components/ui/breadcrumbs.svelte';
</script>

<Header title={'Serviciile noastre'} />

<main>
	<section class="content">
		<h2 class="h2 banner">
			<img src="https://www.case-frumoase.ro/wp-content/uploads/2019/03/DDD.jpg" alt="casa" />
			<span class="text">Consultanță</span>
		</h2>
		<div class="text">
			<p class="body body--vlarge">
				Sunt importante forma terenului, orientarea față de punctele cardinale și poziția drumului
				de acces, precum si conditiile impuse de Certificatul de Urbanism.
			</p>
			<p class="body body--vlarge">
				Mai există condiţionări de natură tehnică ce privesc natura terenului de fundare ce se
				determină prin studii geotehnice elaborate de firme specializate, zona seismică și altele.
			</p>
			<h3 class="h3">Analiza terenului deţinut de dvs. în relaţie cu viitoarea construcţie</h3>
			<p class="body body--vlarge">
				Orice teren are o serie de condiţionări / restricţii de construire enunţate prin
				Certificatul de Urbanism şi prin planurile urbanistice specifice: retrageri obligatorii,
				procent maxim de ocupare a terenului (POT), coeficient de utilizare a terenului (CUT),
				înalţime maximă, aliniere la cornişe sau la fronturi construite, funcţiuni permise si
				altele. În baza acestor indicatori urbanistici, precum și a celorlalți factori va rezulta
				cât şi în ce limite se poate construi pe terenul dvs.
			</p>
		</div>
	</section>
	<section class="content">
		<h2 class="h2 banner">
			<img
				src="https://www.case-frumoase.ro/wp-content/uploads/2019/03/CCC.jpg"
				alt="casa"
				loading="lazy"
			/>
			<span class="text">Vizita la amplasament</span>
		</h2>
		<div class="text">
			<p class="body body--vlarge">
				Colectarea de date suplimentare de la faţa locului, la cerere si contracost.
			</p>
			<h3 class="h3">Studii de arhitectură</h3>
			<p class="body body--vlarge">
				Elaborarea planurilor de arhitectură pornind de la cerinţele specifice clientului,
				condiţionarile impuse de Certificatul de Urbanism şi de alte condiţii specifice terenului:
				orientare faţă de punctele cardinale, accesul din drumul public, vecinătăţi, etc.
			</p>
			<p class="body body--vlarge">
				Stabilirea soluţiei arhitecturale prin modelare 3D: volumetrie, materiale, detalii. Vor
				rezulta imagini în perspectivă ale viitoarei construcţii generate pe calculator cu
				exteriorul cladirii.
			</p>
			<h3 class="h3">
				Consultanţă cu privire la sistemele constructive, materiale de construcţii şi finisaje
			</h3>
		</div>
	</section>
	<section class="content">
		<h2 class="h2 banner">
			<img
				src="https://www.case-frumoase.ro/wp-content/uploads/2019/03/AAA.jpg"
				alt="casa"
				loading="lazy"
			/>
			<span class="text">Proiectare</span>
		</h2>
		<div class="text">
			<p class="body body--vlarge">Firma noastră elaborează urmatoarele tipuri de documentaţii:</p>
			<ol class="body body--vlarge" style="padding-left:18px">
				<li>
					<span
						>Documentaţie necesară obţinerii Certificatului de Urbanism (specialitatea
						arhitectură+acte personale);</span
					>
				</li>
				<li>
					<span
						>Documentaţiile necesare obţinerii avizelor solicitate prin <span
							style="text-decoration: underline;"
						>
							CU (specialitatea arhitectură și instalatii+acte personale)</span
						>;</span
					>
				</li>
				<li>
					<span
						>Documentaţia Tehnică pentru Autorizaţia de Construire (specialitățile arhitectură,
						structură și instalații);</span
					>
				</li>
				<li><span>Proiect Tehnic (specialitățile arhitectură, structură și instalații);</span></li>
				<li>
					<span>Detalii de Execuţie (specialitățile arhitectură, structură și instalații);</span>
				</li>
			</ol>

			<p class="body body--vlarge">
				<strong>Verificarea documentaţiilor</strong> de către ingineri verificatori de proiecte atestaţi
				MLPAT, atât piese scrise cât şi desenate.Proiectele DTAC, PT şi DDE includ următoarele specialităţi:
				arhitectură, structură, instalaţii electrice, instalaţii electrice de curenţi slabi (telefon,
				interfon, reţea de calculatoare etc.), instalaţii termice, ventilaţii şi aer condiţionat, instalaţii
				sanitare şi de incendiu.
			</p>
			<p class="body body--vlarge">
				NOTE:
				<br />1. prin acte personale se înțeleg acte personale ale beneficiarului și cuprind printre
				altele: Planuri Cadastrale, Extras de Carte Funciară Actualizat la Zi (adică să nu fie mai
				vechi de 30 zile când este depus la autorități), copie după actul de proprietate, copie CI,
				etc.
				<br />2. în vederea întocmirii Documentațiilor Tehnice, beneficiarii, trebuie să asigure
				proiectanților un Studiu Geotehnic (cu tot cu verificare) și o Ridicare Topografică pe
				Suport Cadastral vizată OCPI.
			</p>
		</div>
	</section>
</main>

<style>
	main {
		margin-bottom: 4rem;
	}

    h2,h3{
        text-align: center;
    }

	.content {
		min-width: 100%;
		display: flex;
		flex-direction: column;
	}

	.banner {
		position: relative;
		margin-bottom: 4rem;
        width: 100%;
		height: 70rem;
	}

	.banner img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.banner .text {
		color: var(--text-light-color);
		width: 100%;
		position: absolute;
		bottom: 8rem;
		left: 50%;
		transform: translate(-50%);
		z-index: 1;
		text-align: center;
		background: var(--primary-color);
        padding: 1rem 0;
	}

	.content > .text {
        max-width: 130rem;
        margin: auto;
		padding: 0 var(--content-margins);
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.content > .text:last-child {
		margin-bottom: 2rem;
	}
</style>
