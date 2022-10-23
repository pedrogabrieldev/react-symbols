import IconGeneratingTokensFill0Wght100Grad0Opsz48 from '../components/GeneratingTokensFill0Wght100Grad0Opsz48'
import IconGeneratingTokensFill0Wght200Grad0Opsz48 from '../components/GeneratingTokensFill0Wght200Grad0Opsz48'
import IconGeneratingTokensFill0Wght300Grad0Opsz48 from '../components/GeneratingTokensFill0Wght300Grad0Opsz48'
import IconGeneratingTokensFill0Wght400Grad0Opsz48 from '../components/GeneratingTokensFill0Wght400Grad0Opsz48'
import IconGeneratingTokensFill0Wght500Grad0Opsz48 from '../components/GeneratingTokensFill0Wght500Grad0Opsz48'
import IconGeneratingTokensFill0Wght600Grad0Opsz48 from '../components/GeneratingTokensFill0Wght600Grad0Opsz48'
import IconGeneratingTokensFill0Wght700Grad0Opsz48 from '../components/GeneratingTokensFill0Wght700Grad0Opsz48'
import IconGeneratingTokensFill1Wght100Grad0Opsz48 from '../components/GeneratingTokensFill1Wght100Grad0Opsz48'
import IconGeneratingTokensFill1Wght200Grad0Opsz48 from '../components/GeneratingTokensFill1Wght200Grad0Opsz48'
import IconGeneratingTokensFill1Wght300Grad0Opsz48 from '../components/GeneratingTokensFill1Wght300Grad0Opsz48'
import IconGeneratingTokensFill1Wght400Grad0Opsz48 from '../components/GeneratingTokensFill1Wght400Grad0Opsz48'
import IconGeneratingTokensFill1Wght500Grad0Opsz48 from '../components/GeneratingTokensFill1Wght500Grad0Opsz48'
import IconGeneratingTokensFill1Wght600Grad0Opsz48 from '../components/GeneratingTokensFill1Wght600Grad0Opsz48'
import IconGeneratingTokensFill1Wght700Grad0Opsz48 from '../components/GeneratingTokensFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGeneratingTokens = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGeneratingTokensFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGeneratingTokensFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGeneratingTokensFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGeneratingTokensFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGeneratingTokensFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGeneratingTokensFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGeneratingTokensFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGeneratingTokensFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGeneratingTokensFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGeneratingTokensFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGeneratingTokensFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGeneratingTokensFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGeneratingTokensFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGeneratingTokensFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
