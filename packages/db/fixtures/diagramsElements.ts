import type { DiagramElementDraft } from '../src'

export default [
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" height="149" preserveAspectRatio="none" style="width:251px;height:149px;background:#fff" viewBox="0 0 251 149" width="251"><script/><path style="stroke:#181818;stroke-width:.5;stroke-dasharray:5,5" d="M26 36.297v78.266m196-78.266v78.266"/><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="42" x="5" y="5"/><text font-family="sans-serif" font-size="14" textLength="28" x="12" y="24.995">Bob</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="42" x="5" y="113.563"/><text font-family="sans-serif" font-size="14" textLength="28" x="12" y="133.558">Bob</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="46" x="199" y="5"/><text font-family="sans-serif" font-size="14" textLength="32" x="206" y="24.995">Alice</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="46" x="199" y="113.563"/><text font-family="sans-serif" font-size="14" textLength="32" x="206" y="133.558">Alice</text><path fill="#181818" style="stroke:#181818;stroke-width:1" d="m210 63.43 10 4-10 4 4-4z"/><path style="stroke:#181818;stroke-width:1" d="M26 67.43h190"/><text font-family="sans-serif" font-size="13" font-weight="bold" textLength="9" x="33" y="62.364">1</text><text font-family="sans-serif" font-size="13" textLength="149" x="46" y="62.364">Authentication Request</text><path fill="#181818" style="stroke:#181818;stroke-width:1" d="m37 92.563-10 4 10 4-4-4z"/><path style="stroke:#181818;stroke-width:1" d="M31 96.563h190"/><text font-family="sans-serif" font-size="13" font-weight="bold" textLength="9" x="43" y="91.497">2</text><text font-family="sans-serif" font-size="13" textLength="159" x="56" y="91.497">Authentication Response</text><script/></svg>',
    uml: '@startuml\n'
    + '    autonumber\n'
    + '    Bob -> Alice : Authentication Request\n'
    + '    Bob <- Alice : Authentication Response\n'
    + '    @enduml',
    ascii: '     ┌───┐                     ┌─────┐\n'
    + '     │Bob│                     │Alice│\n'
    + '     └─┬─┘                     └──┬──┘\n'
    + '       │𝟏 Authentication Request  │   \n'
    + '       │─────────────────────────>│   \n'
    + '       │                          │   \n'
    + '       │𝟐 Authentication Response │   \n'
    + '       │<─────────────────────────│   \n'
    + '     ┌─┴─┐                     ┌──┴──┐\n'
    + '     │Bob│                     │Alice│\n'
    + '     └───┘                     └─────┘',
    translationId: 1,
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" height="149" preserveAspectRatio="none" style="width:266px;height:149px;background:#fff" viewBox="0 0 266 149" width="266"><path style="stroke:#181818;stroke-width:.5;stroke-dasharray:5,5" d="M26 36.297v78.266m205.5-78.266v78.266"/><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="42" x="5" y="5"/><text font-family="sans-serif" font-size="14" textLength="28" x="12" y="24.995">Боб</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="42" x="5" y="113.563"/><text font-family="sans-serif" font-size="14" textLength="28" x="12" y="133.558">Боб</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="57" x="203.5" y="5"/><text font-family="sans-serif" font-size="14" textLength="43" x="210.5" y="24.995">Алиса</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="57" x="203.5" y="113.563"/><text font-family="sans-serif" font-size="14" textLength="43" x="210.5" y="133.558">Алиса</text><path fill="#181818" style="stroke:#181818;stroke-width:1" d="m220 63.43 10 4-10 4 4-4z"/><path style="stroke:#181818;stroke-width:1" d="M26 67.43h200"/><text font-family="sans-serif" font-size="13" font-weight="bold" textLength="9" x="33" y="62.364">1</text><text font-family="sans-serif" font-size="13" textLength="169" x="46" y="62.364">Запрос аутентификации</text><path fill="#181818" style="stroke:#181818;stroke-width:1" d="m37 92.563-10 4 10 4-4-4z"/><path style="stroke:#181818;stroke-width:1" d="M31 96.563h200"/><text font-family="sans-serif" font-size="13" font-weight="bold" textLength="9" x="43" y="91.497">2</text><text font-family="sans-serif" font-size="13" textLength="165" x="56" y="91.497">Ответ аутентификации</text></svg>',
    uml: '@startuml\n'
    + '    autonumber\n'
    + '    Боб -> Алиса : Запрос аутентификации\n'
    + '    Боб <- Алиса : Ответ аутентификации\n'
    + '@enduml',
    ascii: '     ┌───┐                   ┌─────┐\n'
    + '     │Боб│                   │Алиса│\n'
    + '     └─┬─┘                   └──┬──┘\n'
    + '       │𝟏 Запрос аутентификации │   \n'
    + '       │───────────────────────>│   \n'
    + '       │                        │   \n'
    + '       │𝟐 Ответ аутентификации  │   \n'
    + '       │<───────────────────────│   \n'
    + '     ┌─┴─┐                   ┌──┴──┐\n'
    + '     │Боб│                   │Алиса│\n'
    + '     └───┘                   └─────┘',
    translationId: 2,
  },
  {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" height="149" preserveAspectRatio="none" style="width:251px;height:149px;background:#fff" viewBox="0 0 251 149" width="251"><script/><path style="stroke:#181818;stroke-width:.5;stroke-dasharray:5,5" d="M26 36.297v78.266m196-78.266v78.266"/><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="42" x="5" y="5"/><text font-family="sans-serif" font-size="14" textLength="28" x="12" y="24.995">Bob</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="42" x="5" y="113.563"/><text font-family="sans-serif" font-size="14" textLength="28" x="12" y="133.558">Bob</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="46" x="199" y="5"/><text font-family="sans-serif" font-size="14" textLength="32" x="206" y="24.995">Alice</text><rect fill="#E2E2F0" height="30.297" rx="2.5" ry="2.5" style="stroke:#181818;stroke-width:.5" width="46" x="199" y="113.563"/><text font-family="sans-serif" font-size="14" textLength="32" x="206" y="133.558">Alice</text><path fill="#181818" style="stroke:#181818;stroke-width:1" d="m210 63.43 10 4-10 4 4-4z"/><path style="stroke:#181818;stroke-width:1" d="M26 67.43h190"/><text font-family="sans-serif" font-size="13" font-weight="bold" textLength="9" x="33" y="62.364">1</text><text font-family="sans-serif" font-size="13" textLength="149" x="46" y="62.364">Authentication Request</text><path fill="#181818" style="stroke:#181818;stroke-width:1" d="m37 92.563-10 4 10 4-4-4z"/><path style="stroke:#181818;stroke-width:1" d="M31 96.563h190"/><text font-family="sans-serif" font-size="13" font-weight="bold" textLength="9" x="43" y="91.497">2</text><text font-family="sans-serif" font-size="13" textLength="159" x="56" y="91.497">Authentication Response</text><script/></svg>',
    uml: '@startuml\n'
    + '    autonumber\n'
    + '    Bob -> Alice : Authentication Request\n'
    + '    Bob <- Alice : Authentication Response\n'
    + '    @enduml',
    ascii: '     ┌───┐                     ┌─────┐\n'
    + '     │Bob│                     │Alice│\n'
    + '     └─┬─┘                     └──┬──┘\n'
    + '       │𝟏 Authentication Request  │   \n'
    + '       │─────────────────────────>│   \n'
    + '       │                          │   \n'
    + '       │𝟐 Authentication Response │   \n'
    + '       │<─────────────────────────│   \n'
    + '     ┌─┴─┐                     ┌──┴──┐\n'
    + '     │Bob│                     │Alice│\n'
    + '     └───┘                     └─────┘',
    translationId: 1,
  },
] satisfies DiagramElementDraft[]
