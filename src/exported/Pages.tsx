import IconPagesFill0Wght100Grad0Opsz48 from '../components/PagesFill0Wght100Grad0Opsz48'
import IconPagesFill0Wght200Grad0Opsz48 from '../components/PagesFill0Wght200Grad0Opsz48'
import IconPagesFill0Wght300Grad0Opsz48 from '../components/PagesFill0Wght300Grad0Opsz48'
import IconPagesFill0Wght400Grad0Opsz48 from '../components/PagesFill0Wght400Grad0Opsz48'
import IconPagesFill0Wght500Grad0Opsz48 from '../components/PagesFill0Wght500Grad0Opsz48'
import IconPagesFill0Wght600Grad0Opsz48 from '../components/PagesFill0Wght600Grad0Opsz48'
import IconPagesFill0Wght700Grad0Opsz48 from '../components/PagesFill0Wght700Grad0Opsz48'
import IconPagesFill1Wght100Grad0Opsz48 from '../components/PagesFill1Wght100Grad0Opsz48'
import IconPagesFill1Wght200Grad0Opsz48 from '../components/PagesFill1Wght200Grad0Opsz48'
import IconPagesFill1Wght300Grad0Opsz48 from '../components/PagesFill1Wght300Grad0Opsz48'
import IconPagesFill1Wght400Grad0Opsz48 from '../components/PagesFill1Wght400Grad0Opsz48'
import IconPagesFill1Wght500Grad0Opsz48 from '../components/PagesFill1Wght500Grad0Opsz48'
import IconPagesFill1Wght600Grad0Opsz48 from '../components/PagesFill1Wght600Grad0Opsz48'
import IconPagesFill1Wght700Grad0Opsz48 from '../components/PagesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPages = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPagesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPagesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPagesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPagesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPagesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPagesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPagesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPagesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPagesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPagesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPagesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPagesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPagesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPagesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
