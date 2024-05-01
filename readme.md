## Batalha Mortal: Tailwindcss, StyledComponents, UI Kit(MUI)

![Tailwind vs MUI vs StyledComponents](https://cdn.hashnode.com/res/hashnode/image/upload/v1688149717025/eb082877-c5e2-4ddf-9f51-7b741d8b5f84.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)

Quando se trata de desenvolver interfaces de usuário eficientes e visualmente atraentes, a escolha da abordagem de estilização certa desempenha um papel crucial. Quero trazer essa briga de juniores para discutirmos qual realmente é a melhor 😂 e exploraremos as vantagens e desvantagens de três abordagens populares: UI Kits, Tailwind e Styled Components, com foco especial na sua performance.

Para o teste da UI Kit eu usei MUI para poder ter uma idéia melhor.

---

| | UI Kit | ✅ Tailwind | Styled Components |

|---------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|

| **Prós:** | - Consistência Visual: Oferece componentes predefinidos para manter uma aparência consistente... | - Utilização Direta de Classes: Facilita a criação de UIs responsivas e estilizadas aplicando... | - Componentização: Encoraja a reutilização de estilos. |

| | - Facilidade de Uso: Simples de implementar e usar, especialmente para iniciantes. | - Personalização Flexível: Flexibilidade para personalizar estilos sem escrever CSS personalizado.| - CSS-in-JS: Escopo de estilos por componente, evitando conflitos de classe. |

| | - Rápido Desenvolvimento: Acelera o processo de desenvolvimento, com muitos componentes prontos... | - Tamanho Pequeno: Resulta em um tamanho de aplicativo menor, incluindo apenas as classes utilizadas.| - Flexibilidade: Criação de estilos dinâmicos e responsivos. |

| **Contras:** | - Personalização Limitada: Difícil de personalizar para atender às necessidades específicas do... | - Curva de Aprendizado: Pode ser desafiador para iniciantes devido à abordagem baseada em classes.| - Curva de Aprendizado: Para quem não está familiarizado com CSS-in-JS. |

| | - Peso Adicional: Alguns kits podem aumentar o tamanho do aplicativo. | - Potencial Inchaço de HTML: Uso extensivo de classes pode levar a HTML mais inchado. | - Possível Impacto na Performance: Se não usado corretamente, pode afetar o desempenho. |

| **Nota de Performance:** | 3/5 | 4/5 | 3.5/5 |

| **Tempo de desenvolvimento:** | 2hs | 40 min | 2h45min |

| **Nota de Produtividade:** | Média | Alta | Baixa |

| **Desempenho:**| Potencial impacto no desempenho devido ao peso adicional dos componentes e falta de otimização. | Geralmente boa performance, especialmente em termos de tamanho do aplicativo e velocidade de desenvolvimento. | Performance variável dependendo da organização e renderização de estilos. |
  
---

Contra argumentos não há argumentos.

Teste feito com a instalação base de `react`, `vite` e suas respectivas libs para fazer um ToDo app corroboraram com este estudo. Criando os componentes com o Styled Components e com o Tailwindcss, e no MUI ja tem os componentes criados, apenas estilizando para que todos fiquem iguais.

[FIGMA Modelo de UI do App que usei](https://www.figma.com/file/xqqjskp9c7FMrWyXQ8SYVq/ToDo-List-%E2%80%A2-Desafio-React-Native-(Copy)?type=design&node-id=101%3A96&mode=design&t=WKaIniP8AlhACRbI-1)

[Repositório no github](https://github.com/filipeleonelbatista/batalha-mortal-de-ui-css)

Para entender como foi organizado, desenvolvi os apps em cada branch, então para testar basta mudar para a branch que quiser e ver o codigo.
```
# branchs
.|
.|--main # apenas a apresentação
.|--mui
.|--tailwindcss
.|--styled-components
```
Ao entrar na branch certifique-se de apagar qualquer pasta `node-modules` ou `.vite` que for gerado anteriormente e execute o comando

```bash
npm install
npm run dev #para iniciar a aplicação
```

## Resultados
Rodando na minha maquina cada um dos projetos criados tive o seguinte resultado do lighthouse do DevTools.

### MUI
| | Performance | Acessibilidade | Melhores Práticas | SEO | |----------|-------------|----------------|-------------------|-----| | Desktop | 70 | 93 | 100 | 82 | | Mobile | 55| 93 | 96 | 85 |

Mais detalhes podem ser vistos no [Relatório Desktop](./.github/report_mui.pdf) e no [Relatório Mobile](./.github/report_mui_mobile.pdf) sobre este teste.

### TailwindCSS
| | Performance | Acessibilidade | Melhores Práticas | SEO | |----------|-------------|----------------|-------------------|-----| | Desktop | 93 | 82 | 93 | 82 | | Mobile | 63 | 82| 93 | 85 |

Mais detalhes podem ser vistos no [Relatório Desktop](./.github/report_tailwindcss.pdf) e no [Relatório Mobile](./.github/report_tailwindcss_mobile.pdf) sobre este teste.

### Styled Components
| | Performance | Acessibilidade | Melhores Práticas | SEO | |----------|-------------|----------------|-------------------|-----| | Desktop | 91 | 91 | 96 | 82 | | Mobile | 61 | 91 | 96 | 85 |

Mais detalhes podem ser vistos no [Relatório Desktop](./.github/report_styled_components.pdf) e no [Relatório Mobile](./.github/report_styled_components_mobile.pdf) sobre este teste.

Em termos de performance, Tailwind e Styled Components tendem a ser escolhas mais eficientes em comparação com UI Kits, dependendo da implementação e uso adequado. Tailwind se destaca em tamanho de arquivo e velocidade de desenvolvimento, enquanto Styled Components oferece flexibilidade e componentização para estilização.

Agora como um verdadeiro sênior diria:  

Jr: Qual eu devo usar na minha aplicação

Sr: Depende!  

Para mais discussções saudáveis como essa me siga no [Linkedin](https://linkedin.com/in/filipeleonelbatista).