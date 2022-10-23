import IconSpeakerNotesOffFill0Wght100Grad0Opsz48 from '../components/SpeakerNotesOffFill0Wght100Grad0Opsz48'
import IconSpeakerNotesOffFill0Wght200Grad0Opsz48 from '../components/SpeakerNotesOffFill0Wght200Grad0Opsz48'
import IconSpeakerNotesOffFill0Wght300Grad0Opsz48 from '../components/SpeakerNotesOffFill0Wght300Grad0Opsz48'
import IconSpeakerNotesOffFill0Wght400Grad0Opsz48 from '../components/SpeakerNotesOffFill0Wght400Grad0Opsz48'
import IconSpeakerNotesOffFill0Wght500Grad0Opsz48 from '../components/SpeakerNotesOffFill0Wght500Grad0Opsz48'
import IconSpeakerNotesOffFill0Wght600Grad0Opsz48 from '../components/SpeakerNotesOffFill0Wght600Grad0Opsz48'
import IconSpeakerNotesOffFill0Wght700Grad0Opsz48 from '../components/SpeakerNotesOffFill0Wght700Grad0Opsz48'
import IconSpeakerNotesOffFill1Wght100Grad0Opsz48 from '../components/SpeakerNotesOffFill1Wght100Grad0Opsz48'
import IconSpeakerNotesOffFill1Wght200Grad0Opsz48 from '../components/SpeakerNotesOffFill1Wght200Grad0Opsz48'
import IconSpeakerNotesOffFill1Wght300Grad0Opsz48 from '../components/SpeakerNotesOffFill1Wght300Grad0Opsz48'
import IconSpeakerNotesOffFill1Wght400Grad0Opsz48 from '../components/SpeakerNotesOffFill1Wght400Grad0Opsz48'
import IconSpeakerNotesOffFill1Wght500Grad0Opsz48 from '../components/SpeakerNotesOffFill1Wght500Grad0Opsz48'
import IconSpeakerNotesOffFill1Wght600Grad0Opsz48 from '../components/SpeakerNotesOffFill1Wght600Grad0Opsz48'
import IconSpeakerNotesOffFill1Wght700Grad0Opsz48 from '../components/SpeakerNotesOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpeakerNotesOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpeakerNotesOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpeakerNotesOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpeakerNotesOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpeakerNotesOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpeakerNotesOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpeakerNotesOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpeakerNotesOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpeakerNotesOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpeakerNotesOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpeakerNotesOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpeakerNotesOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpeakerNotesOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpeakerNotesOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpeakerNotesOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
