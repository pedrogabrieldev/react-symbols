import IconArticleFill0Wght100Grad0Opsz48 from '../components/ArticleFill0Wght100Grad0Opsz48'
import IconArticleFill0Wght200Grad0Opsz48 from '../components/ArticleFill0Wght200Grad0Opsz48'
import IconArticleFill0Wght300Grad0Opsz48 from '../components/ArticleFill0Wght300Grad0Opsz48'
import IconArticleFill0Wght400Grad0Opsz48 from '../components/ArticleFill0Wght400Grad0Opsz48'
import IconArticleFill0Wght500Grad0Opsz48 from '../components/ArticleFill0Wght500Grad0Opsz48'
import IconArticleFill0Wght600Grad0Opsz48 from '../components/ArticleFill0Wght600Grad0Opsz48'
import IconArticleFill0Wght700Grad0Opsz48 from '../components/ArticleFill0Wght700Grad0Opsz48'
import IconArticleFill1Wght100Grad0Opsz48 from '../components/ArticleFill1Wght100Grad0Opsz48'
import IconArticleFill1Wght200Grad0Opsz48 from '../components/ArticleFill1Wght200Grad0Opsz48'
import IconArticleFill1Wght300Grad0Opsz48 from '../components/ArticleFill1Wght300Grad0Opsz48'
import IconArticleFill1Wght400Grad0Opsz48 from '../components/ArticleFill1Wght400Grad0Opsz48'
import IconArticleFill1Wght500Grad0Opsz48 from '../components/ArticleFill1Wght500Grad0Opsz48'
import IconArticleFill1Wght600Grad0Opsz48 from '../components/ArticleFill1Wght600Grad0Opsz48'
import IconArticleFill1Wght700Grad0Opsz48 from '../components/ArticleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArticle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArticleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArticleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArticleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArticleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArticleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArticleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArticleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArticleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArticleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArticleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArticleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArticleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArticleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArticleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
