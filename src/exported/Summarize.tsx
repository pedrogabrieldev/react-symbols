import IconSummarizeFill0Wght100Grad0Opsz48 from '../components/SummarizeFill0Wght100Grad0Opsz48'
import IconSummarizeFill0Wght200Grad0Opsz48 from '../components/SummarizeFill0Wght200Grad0Opsz48'
import IconSummarizeFill0Wght300Grad0Opsz48 from '../components/SummarizeFill0Wght300Grad0Opsz48'
import IconSummarizeFill0Wght400Grad0Opsz48 from '../components/SummarizeFill0Wght400Grad0Opsz48'
import IconSummarizeFill0Wght500Grad0Opsz48 from '../components/SummarizeFill0Wght500Grad0Opsz48'
import IconSummarizeFill0Wght600Grad0Opsz48 from '../components/SummarizeFill0Wght600Grad0Opsz48'
import IconSummarizeFill0Wght700Grad0Opsz48 from '../components/SummarizeFill0Wght700Grad0Opsz48'
import IconSummarizeFill1Wght100Grad0Opsz48 from '../components/SummarizeFill1Wght100Grad0Opsz48'
import IconSummarizeFill1Wght200Grad0Opsz48 from '../components/SummarizeFill1Wght200Grad0Opsz48'
import IconSummarizeFill1Wght300Grad0Opsz48 from '../components/SummarizeFill1Wght300Grad0Opsz48'
import IconSummarizeFill1Wght400Grad0Opsz48 from '../components/SummarizeFill1Wght400Grad0Opsz48'
import IconSummarizeFill1Wght500Grad0Opsz48 from '../components/SummarizeFill1Wght500Grad0Opsz48'
import IconSummarizeFill1Wght600Grad0Opsz48 from '../components/SummarizeFill1Wght600Grad0Opsz48'
import IconSummarizeFill1Wght700Grad0Opsz48 from '../components/SummarizeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSummarize = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSummarizeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSummarizeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSummarizeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSummarizeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSummarizeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSummarizeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSummarizeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSummarizeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSummarizeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSummarizeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSummarizeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSummarizeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSummarizeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSummarizeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
