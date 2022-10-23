import IconExploreFill0Wght100Grad0Opsz48 from '../components/ExploreFill0Wght100Grad0Opsz48'
import IconExploreFill0Wght200Grad0Opsz48 from '../components/ExploreFill0Wght200Grad0Opsz48'
import IconExploreFill0Wght300Grad0Opsz48 from '../components/ExploreFill0Wght300Grad0Opsz48'
import IconExploreFill0Wght400Grad0Opsz48 from '../components/ExploreFill0Wght400Grad0Opsz48'
import IconExploreFill0Wght500Grad0Opsz48 from '../components/ExploreFill0Wght500Grad0Opsz48'
import IconExploreFill0Wght600Grad0Opsz48 from '../components/ExploreFill0Wght600Grad0Opsz48'
import IconExploreFill0Wght700Grad0Opsz48 from '../components/ExploreFill0Wght700Grad0Opsz48'
import IconExploreFill1Wght100Grad0Opsz48 from '../components/ExploreFill1Wght100Grad0Opsz48'
import IconExploreFill1Wght200Grad0Opsz48 from '../components/ExploreFill1Wght200Grad0Opsz48'
import IconExploreFill1Wght300Grad0Opsz48 from '../components/ExploreFill1Wght300Grad0Opsz48'
import IconExploreFill1Wght400Grad0Opsz48 from '../components/ExploreFill1Wght400Grad0Opsz48'
import IconExploreFill1Wght500Grad0Opsz48 from '../components/ExploreFill1Wght500Grad0Opsz48'
import IconExploreFill1Wght600Grad0Opsz48 from '../components/ExploreFill1Wght600Grad0Opsz48'
import IconExploreFill1Wght700Grad0Opsz48 from '../components/ExploreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconExplore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconExploreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconExploreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconExploreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconExploreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconExploreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconExploreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconExploreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconExploreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconExploreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconExploreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconExploreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconExploreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconExploreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconExploreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
