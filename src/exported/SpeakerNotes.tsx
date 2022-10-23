import IconSpeakerNotesFill0Wght100Grad0Opsz48 from '../components/SpeakerNotesFill0Wght100Grad0Opsz48'
import IconSpeakerNotesFill0Wght200Grad0Opsz48 from '../components/SpeakerNotesFill0Wght200Grad0Opsz48'
import IconSpeakerNotesFill0Wght300Grad0Opsz48 from '../components/SpeakerNotesFill0Wght300Grad0Opsz48'
import IconSpeakerNotesFill0Wght400Grad0Opsz48 from '../components/SpeakerNotesFill0Wght400Grad0Opsz48'
import IconSpeakerNotesFill0Wght500Grad0Opsz48 from '../components/SpeakerNotesFill0Wght500Grad0Opsz48'
import IconSpeakerNotesFill0Wght600Grad0Opsz48 from '../components/SpeakerNotesFill0Wght600Grad0Opsz48'
import IconSpeakerNotesFill0Wght700Grad0Opsz48 from '../components/SpeakerNotesFill0Wght700Grad0Opsz48'
import IconSpeakerNotesFill1Wght100Grad0Opsz48 from '../components/SpeakerNotesFill1Wght100Grad0Opsz48'
import IconSpeakerNotesFill1Wght200Grad0Opsz48 from '../components/SpeakerNotesFill1Wght200Grad0Opsz48'
import IconSpeakerNotesFill1Wght300Grad0Opsz48 from '../components/SpeakerNotesFill1Wght300Grad0Opsz48'
import IconSpeakerNotesFill1Wght400Grad0Opsz48 from '../components/SpeakerNotesFill1Wght400Grad0Opsz48'
import IconSpeakerNotesFill1Wght500Grad0Opsz48 from '../components/SpeakerNotesFill1Wght500Grad0Opsz48'
import IconSpeakerNotesFill1Wght600Grad0Opsz48 from '../components/SpeakerNotesFill1Wght600Grad0Opsz48'
import IconSpeakerNotesFill1Wght700Grad0Opsz48 from '../components/SpeakerNotesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpeakerNotes = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpeakerNotesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpeakerNotesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpeakerNotesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpeakerNotesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpeakerNotesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpeakerNotesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpeakerNotesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpeakerNotesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpeakerNotesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpeakerNotesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpeakerNotesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpeakerNotesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpeakerNotesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpeakerNotesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
