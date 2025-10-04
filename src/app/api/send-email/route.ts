// src/app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    email,
    phone,
    project_type,
    budget,
    materials,
    inspiration_url,
    inspiration_details,
    message
  } = body;

  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json({ error: 'Brak konfiguracji API' }, { status: 500 });
  }

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  // ***** POCZĄTEK POPRAWKI *****
  // Używamy oficjalnej metody setApiKey do autoryzacji
  apiInstance.setApiKey(
    SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
  );
  // ***** KONIEC POPRAWKI *****

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = `Nowe zapytanie z portfolio od: ${name}`;
  // UWAGA: Upewnij się, że ten adres email jest zarejestrowany jako nadawca w Brevo!
  sendSmtpEmail.sender = { name: "Formularz Portfolio", email: "daniel.filus99@gmail.com" }; 
  sendSmtpEmail.to = [{ email: "daniel.filus99@gmail.com", name: "Daniel Filus" }];
  
  sendSmtpEmail.htmlContent = `
    <h1>Nowe zapytanie o projekt!</h1>
    <p><strong>Od:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone || 'Nie podano'}</p>
    <hr>
    <h2>Szczegóły projektu:</h2>
    <p><strong>Rodzaj projektu:</strong> ${project_type}</p>
    <p><strong>Budżet:</strong> ${budget}</p>
    <p><strong>Posiadane materiały:</strong> ${materials.join(', ') || 'Brak'}</p>
    <hr>
    <h2>Inspiracje:</h2>
    <p><strong>Link:</strong> <a href="${inspiration_url}">${inspiration_url || 'Nie podano'}</a></p>
    <p><strong>Co się podoba:</strong> ${inspiration_details || 'Nie podano'}</p>
    <hr>
    <h2>Wiadomość:</h2>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  try {
    // W nowszych wersjach metoda zwraca obiekt z danymi, a nie Promise<void>
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    return NextResponse.json({ message: 'Email wysłany pomyślnie!' }, { status: 200 });
  } catch (error) {
    console.error('Błąd Brevo:', error);
    return NextResponse.json({ error: 'Nie udało się wysłać emaila' }, { status: 500 });
  }
}