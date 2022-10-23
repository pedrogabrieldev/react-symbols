import IconWebStoriesFill0Wght100Grad0Opsz48 from '../components/WebStoriesFill0Wght100Grad0Opsz48'
import IconWebStoriesFill0Wght200Grad0Opsz48 from '../components/WebStoriesFill0Wght200Grad0Opsz48'
import IconWebStoriesFill0Wght300Grad0Opsz48 from '../components/WebStoriesFill0Wght300Grad0Opsz48'
import IconWebStoriesFill0Wght400Grad0Opsz48 from '../components/WebStoriesFill0Wght400Grad0Opsz48'
import IconWebStoriesFill0Wght500Grad0Opsz48 from '../components/WebStoriesFill0Wght500Grad0Opsz48'
import IconWebStoriesFill0Wght600Grad0Opsz48 from '../components/WebStoriesFill0Wght600Grad0Opsz48'
import IconWebStoriesFill0Wght700Grad0Opsz48 from '../components/WebStoriesFill0Wght700Grad0Opsz48'
import IconWebStoriesFill1Wght100Grad0Opsz48 from '../components/WebStoriesFill1Wght100Grad0Opsz48'
import IconWebStoriesFill1Wght200Grad0Opsz48 from '../components/WebStoriesFill1Wght200Grad0Opsz48'
import IconWebStoriesFill1Wght300Grad0Opsz48 from '../components/WebStoriesFill1Wght300Grad0Opsz48'
import IconWebStoriesFill1Wght400Grad0Opsz48 from '../components/WebStoriesFill1Wght400Grad0Opsz48'
import IconWebStoriesFill1Wght500Grad0Opsz48 from '../components/WebStoriesFill1Wght500Grad0Opsz48'
import IconWebStoriesFill1Wght600Grad0Opsz48 from '../components/WebStoriesFill1Wght600Grad0Opsz48'
import IconWebStoriesFill1Wght700Grad0Opsz48 from '../components/WebStoriesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWebStories = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWebStoriesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWebStoriesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWebStoriesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWebStoriesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWebStoriesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWebStoriesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWebStoriesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWebStoriesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWebStoriesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWebStoriesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWebStoriesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWebStoriesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWebStoriesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWebStoriesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
