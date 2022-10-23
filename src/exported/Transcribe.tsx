import IconTranscribeFill0Wght100Grad0Opsz48 from '../components/TranscribeFill0Wght100Grad0Opsz48'
import IconTranscribeFill0Wght200Grad0Opsz48 from '../components/TranscribeFill0Wght200Grad0Opsz48'
import IconTranscribeFill0Wght300Grad0Opsz48 from '../components/TranscribeFill0Wght300Grad0Opsz48'
import IconTranscribeFill0Wght400Grad0Opsz48 from '../components/TranscribeFill0Wght400Grad0Opsz48'
import IconTranscribeFill0Wght500Grad0Opsz48 from '../components/TranscribeFill0Wght500Grad0Opsz48'
import IconTranscribeFill0Wght600Grad0Opsz48 from '../components/TranscribeFill0Wght600Grad0Opsz48'
import IconTranscribeFill0Wght700Grad0Opsz48 from '../components/TranscribeFill0Wght700Grad0Opsz48'
import IconTranscribeFill1Wght100Grad0Opsz48 from '../components/TranscribeFill1Wght100Grad0Opsz48'
import IconTranscribeFill1Wght200Grad0Opsz48 from '../components/TranscribeFill1Wght200Grad0Opsz48'
import IconTranscribeFill1Wght300Grad0Opsz48 from '../components/TranscribeFill1Wght300Grad0Opsz48'
import IconTranscribeFill1Wght400Grad0Opsz48 from '../components/TranscribeFill1Wght400Grad0Opsz48'
import IconTranscribeFill1Wght500Grad0Opsz48 from '../components/TranscribeFill1Wght500Grad0Opsz48'
import IconTranscribeFill1Wght600Grad0Opsz48 from '../components/TranscribeFill1Wght600Grad0Opsz48'
import IconTranscribeFill1Wght700Grad0Opsz48 from '../components/TranscribeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTranscribe = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTranscribeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTranscribeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTranscribeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTranscribeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTranscribeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTranscribeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTranscribeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTranscribeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTranscribeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTranscribeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTranscribeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTranscribeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTranscribeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTranscribeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
