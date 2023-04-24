import React from 'react'
import './Congratulations.css'

export default function CongratulationsPage() {
  return (
    <div class="card">
		<div class="imgBox">
			<div class="bark"></div>
			<img src="https://image.ibb.co/fYzTrb/lastofus.jpg"/>
		</div>
		<div class="details">
			<h4 class="color1">Obrigado pela confiança</h4>
			<h5 class="color2 margin">Separe seus documentos!</h5>
			<p>Aliás,</p>
			<p>*Documentos virtuais ou copias</p>
			<p>Não são aceitos.</p>
			<p></p>
			<p>*Menores de 18 anos </p>
			<p>Só acompanhado dos pais!</p>
			<p>Quer saber todas as regras?</p>
			<p><a href=''>CLIQUE AQUI!</a></p>
			<p class="text-right">PS: Não fui eu que fiz as regras</p>
			<p class="text-right">♥Loumar</p>
		</div>
	</div>
  )
}
