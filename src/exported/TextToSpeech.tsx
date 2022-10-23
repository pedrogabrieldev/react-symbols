import IconTextToSpeechFill0Wght100Grad0Opsz48 from '../components/TextToSpeechFill0Wght100Grad0Opsz48'
import IconTextToSpeechFill0Wght200Grad0Opsz48 from '../components/TextToSpeechFill0Wght200Grad0Opsz48'
import IconTextToSpeechFill0Wght300Grad0Opsz48 from '../components/TextToSpeechFill0Wght300Grad0Opsz48'
import IconTextToSpeechFill0Wght400Grad0Opsz48 from '../components/TextToSpeechFill0Wght400Grad0Opsz48'
import IconTextToSpeechFill0Wght500Grad0Opsz48 from '../components/TextToSpeechFill0Wght500Grad0Opsz48'
import IconTextToSpeechFill0Wght600Grad0Opsz48 from '../components/TextToSpeechFill0Wght600Grad0Opsz48'
import IconTextToSpeechFill0Wght700Grad0Opsz48 from '../components/TextToSpeechFill0Wght700Grad0Opsz48'
import IconTextToSpeechFill1Wght100Grad0Opsz48 from '../components/TextToSpeechFill1Wght100Grad0Opsz48'
import IconTextToSpeechFill1Wght200Grad0Opsz48 from '../components/TextToSpeechFill1Wght200Grad0Opsz48'
import IconTextToSpeechFill1Wght300Grad0Opsz48 from '../components/TextToSpeechFill1Wght300Grad0Opsz48'
import IconTextToSpeechFill1Wght400Grad0Opsz48 from '../components/TextToSpeechFill1Wght400Grad0Opsz48'
import IconTextToSpeechFill1Wght500Grad0Opsz48 from '../components/TextToSpeechFill1Wght500Grad0Opsz48'
import IconTextToSpeechFill1Wght600Grad0Opsz48 from '../components/TextToSpeechFill1Wght600Grad0Opsz48'
import IconTextToSpeechFill1Wght700Grad0Opsz48 from '../components/TextToSpeechFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTextToSpeech = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTextToSpeechFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTextToSpeechFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTextToSpeechFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTextToSpeechFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTextToSpeechFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTextToSpeechFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTextToSpeechFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTextToSpeechFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTextToSpeechFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTextToSpeechFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTextToSpeechFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTextToSpeechFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTextToSpeechFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTextToSpeechFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
