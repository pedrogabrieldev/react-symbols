import HomeFill0Wght100Grad0Opsz48 from '../components/HomeFill0Wght100Grad0Opsz48'
import HomeFill0Wght200Grad0Opsz48 from '../components/HomeFill0Wght200Grad0Opsz48'
import HomeFill0Wght300Grad0Opsz48 from '../components/HomeFill0Wght300Grad0Opsz48'
import HomeFill0Wght400Grad0Opsz48 from '../components/HomeFill0Wght400Grad0Opsz48'
import HomeFill0Wght500Grad0Opsz48 from '../components/HomeFill0Wght500Grad0Opsz48'
import HomeFill0Wght600Grad0Opsz48 from '../components/HomeFill0Wght600Grad0Opsz48'
import HomeFill0Wght700Grad0Opsz48 from '../components/HomeFill0Wght700Grad0Opsz48'
import HomeFill1Wght100Grad0Opsz48 from '../components/HomeFill1Wght100Grad0Opsz48'
import HomeFill1Wght200Grad0Opsz48 from '../components/HomeFill1Wght200Grad0Opsz48'
import HomeFill1Wght300Grad0Opsz48 from '../components/HomeFill1Wght300Grad0Opsz48'
import HomeFill1Wght400Grad0Opsz48 from '../components/HomeFill1Wght400Grad0Opsz48'
import HomeFill1Wght500Grad0Opsz48 from '../components/HomeFill1Wght500Grad0Opsz48'
import HomeFill1Wght600Grad0Opsz48 from '../components/HomeFill1Wght600Grad0Opsz48'
import HomeFill1Wght700Grad0Opsz48 from '../components/HomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Home = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <HomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <HomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <HomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <HomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <HomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <HomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <HomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <HomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <HomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <HomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <HomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <HomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <HomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <HomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
