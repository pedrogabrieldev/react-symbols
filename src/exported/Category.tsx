import IconCategoryFill0Wght100Grad0Opsz48 from '../components/CategoryFill0Wght100Grad0Opsz48'
import IconCategoryFill0Wght200Grad0Opsz48 from '../components/CategoryFill0Wght200Grad0Opsz48'
import IconCategoryFill0Wght300Grad0Opsz48 from '../components/CategoryFill0Wght300Grad0Opsz48'
import IconCategoryFill0Wght400Grad0Opsz48 from '../components/CategoryFill0Wght400Grad0Opsz48'
import IconCategoryFill0Wght500Grad0Opsz48 from '../components/CategoryFill0Wght500Grad0Opsz48'
import IconCategoryFill0Wght600Grad0Opsz48 from '../components/CategoryFill0Wght600Grad0Opsz48'
import IconCategoryFill0Wght700Grad0Opsz48 from '../components/CategoryFill0Wght700Grad0Opsz48'
import IconCategoryFill1Wght100Grad0Opsz48 from '../components/CategoryFill1Wght100Grad0Opsz48'
import IconCategoryFill1Wght200Grad0Opsz48 from '../components/CategoryFill1Wght200Grad0Opsz48'
import IconCategoryFill1Wght300Grad0Opsz48 from '../components/CategoryFill1Wght300Grad0Opsz48'
import IconCategoryFill1Wght400Grad0Opsz48 from '../components/CategoryFill1Wght400Grad0Opsz48'
import IconCategoryFill1Wght500Grad0Opsz48 from '../components/CategoryFill1Wght500Grad0Opsz48'
import IconCategoryFill1Wght600Grad0Opsz48 from '../components/CategoryFill1Wght600Grad0Opsz48'
import IconCategoryFill1Wght700Grad0Opsz48 from '../components/CategoryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCategory = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCategoryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCategoryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCategoryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCategoryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCategoryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCategoryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCategoryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCategoryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCategoryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCategoryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCategoryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCategoryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCategoryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCategoryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
