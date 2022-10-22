
  import HomeFill1Wght100Grad0Opsz48 from '../components/HomeFill1Wght100Grad0Opsz48'
  import HomeFill1Wght200Grad0Opsz48 from '../components/HomeFill1Wght200Grad0Opsz48'
  import HomeFill1Wght300Grad0Opsz48 from '../components/HomeFill1Wght300Grad0Opsz48'
  import HomeFill1Wght400Grad0Opsz48 from '../components/HomeFill1Wght400Grad0Opsz48'
  import HomeFill1Wght500Grad0Opsz48 from '../components/HomeFill1Wght500Grad0Opsz48'
  import HomeFill1Wght600Grad0Opsz48 from '../components/HomeFill1Wght600Grad0Opsz48'
  import HomeFill1Wght700Grad0Opsz48 from '../components/HomeFill1Wght700Grad0Opsz48'
  import HomeFill0Wght100Grad0Opsz48 from '../components/HomeFill0Wght100Grad0Opsz48'
  import HomeFill0Wght200Grad0Opsz48 from '../components/HomeFill0Wght200Grad0Opsz48'
  import HomeFill0Wght300Grad0Opsz48 from '../components/HomeFill0Wght300Grad0Opsz48'
  import HomeFill0Wght400Grad0Opsz48 from '../components/HomeFill0Wght400Grad0Opsz48'
  import HomeFill0Wght500Grad0Opsz48 from '../components/HomeFill0Wght500Grad0Opsz48'
  import HomeFill0Wght600Grad0Opsz48 from '../components/HomeFill0Wght600Grad0Opsz48'
  import HomeFill0Wght700Grad0Opsz48 from '../components/HomeFill0Wght700Grad0Opsz48'

  import { IconTemplateProps } from '../IconTemplate.types'

  export const Home = ({ variant, size = 48, weight = '400', color }: IconTemplateProps) => {
    switch (true) {
      case variant === 'filled' && weight === '100':
        return <HomeFill1Wght100Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '200':
        return <HomeFill1Wght200Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '300':
        return <HomeFill1Wght300Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '400':
        return <HomeFill1Wght400Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '500':
        return <HomeFill1Wght500Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '600':
        return <HomeFill1Wght600Grad0Opsz48 size={size} color={color} />
      case variant === 'filled' && weight === '700':
        return <HomeFill1Wght700Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '100':
        return <HomeFill0Wght100Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '200':
        return <HomeFill0Wght200Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '300':
        return <HomeFill0Wght300Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '400':
        return <HomeFill0Wght400Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '500':
        return <HomeFill0Wght500Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '600':
        return <HomeFill0Wght600Grad0Opsz48 size={size} color={color} />
      case variant === 'outlined' && weight === '700':
        return <HomeFill0Wght700Grad0Opsz48 size={size} color={color} />
      default:
        return null
    }
  }
