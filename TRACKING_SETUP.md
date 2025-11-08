# 🎯 CONFIGURAÇÃO DE TRACKING - RRD CÂMARAS FRIAS

## 📋 IDs PARA SUBSTITUIR

### 🏷️ GOOGLE TAG MANAGER
**Localização**: Linha 8 e 25 no `index.html`
```javascript
// SUBSTITUIR ESTE ID:
'GTM-XXXXXXX'
// POR SEU ID REAL DO GTM (ex: 'GTM-5SKB6LV6')
```

### 📊 GOOGLE ANALYTICS 4
**Localização**: Linha 271 no `index.html`
```javascript
// SUBSTITUIR ESTE ID:
'G-XXXXXXXXXX'
// POR SEU ID REAL do GA4 (ex: 'G-ABC123DEF4')
```

### 📱 FACEBOOK PIXEL
**Localização**: Linha 256 e 262 no `index.html`
```javascript
// SUBSTITUIR ESTE ID:
'FACEBOOK_PIXEL_ID'
// POR SEU ID REAL do Meta Pixel (ex: '1234567890123456')
```

### 🎯 GOOGLE ADS CONVERSIONS
**Localização**: Linhas 204 e 220 no `index.html`
```javascript
// SUBSTITUIR ESTE ID:
'AW-XXXXXXXXX/XXXXX'
// POR SEU ID REAL de conversão do Google Ads (ex: 'AW-123456789/AbC-D_efG-h')
```

## 📞 NÚMERO DO WHATSAPP
✅ **JÁ CONFIGURADO**: (54) 992619111
- Formato no código: `5554992619111`

## 🎯 EVENTOS DE CONVERSÃO CONFIGURADOS

### 📱 WhatsApp Clicks
1. **Botão Principal**: `whatsapp_click_main`
2. **Botão Flutuante**: `whatsapp_click_float`

### 🔘 CTA Clicks  
1. **Hero Button**: `cta_click_hero`
2. **Specialist Button**: `cta_click_specialist`

### 📈 Engagement Events
1. **Scroll 50%**: `scroll_50_percent`
2. **30s na Página**: `time_on_page_30s`
3. **Page View**: Automático

## 🚀 COMO USAR

### 1️⃣ **Google Tag Manager**
- Acesse: https://tagmanager.google.com
- Crie um container para o site
- Substitua `GTM-XXXXXXX` pelo seu ID

### 2️⃣ **Google Analytics 4**
- Pode ser configurado via GTM ou direto
- Substitua `G-XXXXXXXXXX` pelo seu ID

### 3️⃣ **Meta Pixel (Facebook/Instagram)**
- Acesse: https://business.facebook.com/events_manager
- Crie um pixel para o site
- Substitua `FACEBOOK_PIXEL_ID` pelo seu ID

### 4️⃣ **Google Ads**
- Configure conversões no Google Ads
- Substitua `AW-XXXXXXXXX/XXXXX` pelos seus IDs

## 📊 EVENTOS PERSONALIZADOS NO GTM

Configure estes triggers no GTM para máximo controle:

```
Trigger Name: WhatsApp Main Click
Event: whatsapp_click_main

Trigger Name: WhatsApp Float Click  
Event: whatsapp_click_float

Trigger Name: Hero CTA Click
Event: cta_click_hero

Trigger Name: Specialist CTA Click
Event: cta_click_specialist

Trigger Name: 50% Scroll
Event: scroll_50_percent

Trigger Name: 30s Time on Page
Event: time_on_page_30s
```

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

- [ ] Substituir GTM ID (2 locais)
- [ ] Substituir GA4 ID (1 local)  
- [ ] Substituir Facebook Pixel ID (2 locais)
- [ ] Substituir Google Ads Conversion IDs (2 locais)
- [ ] Testar eventos no GTM Preview
- [ ] Verificar conversões no Google Ads
- [ ] Confirmar eventos no Facebook Events Manager
- [ ] Validar no GA4 Real-time

## 🎯 RESULTADO ESPERADO

Após a configuração, você terá tracking completo de:
- ✅ Visualizações de página
- ✅ Cliques nos botões do WhatsApp (leads)
- ✅ Engajamento (scroll, tempo)
- ✅ Conversões para campanhas pagas
- ✅ Dados para remarketing

**🚀 Pronto para campanhas de mídia paga com tracking profissional!**