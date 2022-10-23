import IconSpeechToTextFill0Wght100Grad0Opsz48 from '../components/SpeechToTextFill0Wght100Grad0Opsz48'
import IconSpeechToTextFill0Wght200Grad0Opsz48 from '../components/SpeechToTextFill0Wght200Grad0Opsz48'
import IconSpeechToTextFill0Wght300Grad0Opsz48 from '../components/SpeechToTextFill0Wght300Grad0Opsz48'
import IconSpeechToTextFill0Wght400Grad0Opsz48 from '../components/SpeechToTextFill0Wght400Grad0Opsz48'
import IconSpeechToTextFill0Wght500Grad0Opsz48 from '../components/SpeechToTextFill0Wght500Grad0Opsz48'
import IconSpeechToTextFill0Wght600Grad0Opsz48 from '../components/SpeechToTextFill0Wght600Grad0Opsz48'
import IconSpeechToTextFill0Wght700Grad0Opsz48 from '../components/SpeechToTextFill0Wght700Grad0Opsz48'
import IconSpeechToTextFill1Wght100Grad0Opsz48 from '../components/SpeechToTextFill1Wght100Grad0Opsz48'
import IconSpeechToTextFill1Wght200Grad0Opsz48 from '../components/SpeechToTextFill1Wght200Grad0Opsz48'
import IconSpeechToTextFill1Wght300Grad0Opsz48 from '../components/SpeechToTextFill1Wght300Grad0Opsz48'
import IconSpeechToTextFill1Wght400Grad0Opsz48 from '../components/SpeechToTextFill1Wght400Grad0Opsz48'
import IconSpeechToTextFill1Wght500Grad0Opsz48 from '../components/SpeechToTextFill1Wght500Grad0Opsz48'
import IconSpeechToTextFill1Wght600Grad0Opsz48 from '../components/SpeechToTextFill1Wght600Grad0Opsz48'
import IconSpeechToTextFill1Wght700Grad0Opsz48 from '../components/SpeechToTextFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpeechToText = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpeechToTextFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpeechToTextFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpeechToTextFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpeechToTextFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpeechToTextFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpeechToTextFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpeechToTextFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpeechToTextFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpeechToTextFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpeechToTextFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpeechToTextFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpeechToTextFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpeechToTextFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpeechToTextFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
