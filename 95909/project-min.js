THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0,this.renderOrder=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0,this.renderOrder=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld),this.positionScreen.copy(a.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0,this.renderOrder=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null,this.renderOrder=0},THREE.Projector=function(){function a(){if(i===t){var a=new THREE.RenderableObject;return s.push(a),t++,i++,a}return s[i++]}function b(){if(k===v){var a=new THREE.RenderableVertex;return u.push(a),v++,k++,a}return u[k++]}function c(){if(m===x){var a=new THREE.RenderableFace;return w.push(a),x++,m++,a}return w[m++]}function d(){if(o===z){var a=new THREE.RenderableLine;return y.push(a),z++,o++,a}return y[o++]}function e(){if(q===B){var a=new THREE.RenderableSprite;return A.push(a),B++,q++,a}return A[q++]}function f(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function g(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;return e>=0&&f>=0&&g>=0&&h>=0?!0:0>e&&0>f||0>g&&0>h?!1:(0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f))),0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h))),c>d?!1:(a.lerp(b,c),b.lerp(a,1-d),!0))}var h,i,j,k,l,m,n,o,p,q,r,s=[],t=0,u=[],v=0,w=[],x=0,y=[],z=0,A=[],B=0,C={objects:[],lights:[],elements:[]},D=new THREE.Vector3,E=new THREE.Vector4,F=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),G=new THREE.Box3,H=new Array(3),I=(new Array(4),new THREE.Matrix4),J=new THREE.Matrix4,K=new THREE.Matrix4,L=new THREE.Matrix3,M=new THREE.Frustum,N=new THREE.Vector4,O=new THREE.Vector4;this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project()."),a.project(b)},this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),a.unproject(b)},this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var P=function(){function a(a){s=a,t=s.material,v.getNormalMatrix(s.matrixWorld),p.length=0,q.length=0}function e(a){var b=a.position,c=a.positionWorld,d=a.positionScreen;c.copy(b).applyMatrix4(r),d.copy(c).applyMatrix4(J);var e=1/d.w;d.x*=e,d.y*=e,d.z*=e,a.visible=d.x>=-1&&d.x<=1&&d.y>=-1&&d.y<=1&&d.z>=-1&&d.z<=1}function f(a,c,d){j=b(),j.position.set(a,c,d),e(j)}function g(a,b,c){p.push(a,b,c)}function h(a,b){q.push(a,b)}function i(a,b,c){return a.visible===!0||b.visible===!0||c.visible===!0?!0:(H[0]=a.positionScreen,H[1]=b.positionScreen,H[2]=c.positionScreen,F.intersectsBox(G.setFromPoints(H)))}function k(a,b,c){return(c.positionScreen.x-a.positionScreen.x)*(b.positionScreen.y-a.positionScreen.y)-(c.positionScreen.y-a.positionScreen.y)*(b.positionScreen.x-a.positionScreen.x)<0}function m(a,b){var c=u[a],e=u[b];n=d(),n.id=s.id,n.v1.copy(c),n.v2.copy(e),n.z=(c.positionScreen.z+e.positionScreen.z)/2,n.renderOrder=s.renderOrder,n.material=s.material,C.elements.push(n)}function o(a,b,d){var e=u[a],f=u[b],g=u[d];if(i(e,f,g)!==!1&&(t.side===THREE.DoubleSide||k(e,f,g)===!0)){l=c(),l.id=s.id,l.v1.copy(e),l.v2.copy(f),l.v3.copy(g),l.z=(e.positionScreen.z+f.positionScreen.z+g.positionScreen.z)/3,l.renderOrder=s.renderOrder,l.normalModel.fromArray(p,3*a),l.normalModel.applyMatrix3(v).normalize();for(var h=0;3>h;h++){var j=l.vertexNormalsModel[h];j.fromArray(p,3*arguments[h]),j.applyMatrix3(v).normalize();var m=l.uvs[h];m.fromArray(q,2*arguments[h])}l.vertexNormalsLength=3,l.material=s.material,C.elements.push(l)}}var p=[],q=[],s=null,t=null,v=new THREE.Matrix3;return{setObject:a,projectVertex:e,checkTriangleVisibility:i,checkBackfaceCulling:k,pushVertex:f,pushNormal:g,pushUv:h,pushLine:m,pushTriangle:o}},Q=new P;this.projectScene=function(j,s,t,v){m=0,o=0,q=0,C.elements.length=0,j.autoUpdate===!0&&j.updateMatrixWorld(),null===s.parent&&s.updateMatrixWorld(),I.copy(s.matrixWorldInverse.getInverse(s.matrixWorld)),J.multiplyMatrices(s.projectionMatrix,I),M.setFromMatrix(J),i=0,C.objects.length=0,C.lights.length=0,j.traverseVisible(function(b){if(b instanceof THREE.Light)C.lights.push(b);else if(b instanceof THREE.Mesh||b instanceof THREE.Line||b instanceof THREE.Sprite){var c=b.material;if(c.visible===!1)return;(b.frustumCulled===!1||M.intersectsObject(b)===!0)&&(h=a(),h.id=b.id,h.object=b,D.setFromMatrixPosition(b.matrixWorld),D.applyProjection(J),h.z=D.z,h.renderOrder=b.renderOrder,C.objects.push(h))}}),t===!0&&C.objects.sort(f);for(var w=0,x=C.objects.length;x>w;w++){var y=C.objects[w].object,z=y.geometry;if(Q.setObject(y),r=y.matrixWorld,k=0,y instanceof THREE.Mesh){if(z instanceof THREE.BufferGeometry){var A=z.attributes,B=z.groups;if(void 0===A.position)continue;for(var F=A.position.array,G=0,H=F.length;H>G;G+=3)Q.pushVertex(F[G],F[G+1],F[G+2]);if(void 0!==A.normal)for(var P=A.normal.array,G=0,H=P.length;H>G;G+=3)Q.pushNormal(P[G],P[G+1],P[G+2]);if(void 0!==A.uv)for(var R=A.uv.array,G=0,H=R.length;H>G;G+=2)Q.pushUv(R[G],R[G+1]);if(null!==z.index){var S=z.index.array;if(B.length>0)for(var w=0;w<B.length;w++)for(var T=B[w],G=T.start,H=T.start+T.count;H>G;G+=3)Q.pushTriangle(S[G],S[G+1],S[G+2]);else for(var G=0,H=S.length;H>G;G+=3)Q.pushTriangle(S[G],S[G+1],S[G+2])}else for(var G=0,H=F.length/3;H>G;G+=3)Q.pushTriangle(G,G+1,G+2)}else if(z instanceof THREE.Geometry){var U=z.vertices,V=z.faces,W=z.faceVertexUvs[0];L.getNormalMatrix(r);for(var X=y.material,Y=X instanceof THREE.MultiMaterial,Z=Y===!0?y.material:null,$=0,_=U.length;_>$;$++){var aa=U[$];if(D.copy(aa),X.morphTargets===!0)for(var ba=z.morphTargets,ca=y.morphTargetInfluences,da=0,ea=ba.length;ea>da;da++){var fa=ca[da];if(0!==fa){var ga=ba[da],ha=ga.vertices[$];D.x+=(ha.x-aa.x)*fa,D.y+=(ha.y-aa.y)*fa,D.z+=(ha.z-aa.z)*fa}}Q.pushVertex(D.x,D.y,D.z)}for(var ia=0,ja=V.length;ja>ia;ia++){var ka=V[ia];if(X=Y===!0?Z.materials[ka.materialIndex]:y.material,void 0!==X){var la=X.side,ma=u[ka.a],na=u[ka.b],oa=u[ka.c];if(Q.checkTriangleVisibility(ma,na,oa)!==!1){var pa=Q.checkBackfaceCulling(ma,na,oa);if(la!==THREE.DoubleSide){if(la===THREE.FrontSide&&pa===!1)continue;if(la===THREE.BackSide&&pa===!0)continue}l=c(),l.id=y.id,l.v1.copy(ma),l.v2.copy(na),l.v3.copy(oa),l.normalModel.copy(ka.normal),pa!==!1||la!==THREE.BackSide&&la!==THREE.DoubleSide||l.normalModel.negate(),l.normalModel.applyMatrix3(L).normalize();for(var qa=ka.vertexNormals,ra=0,sa=Math.min(qa.length,3);sa>ra;ra++){var ta=l.vertexNormalsModel[ra];ta.copy(qa[ra]),pa!==!1||la!==THREE.BackSide&&la!==THREE.DoubleSide||ta.negate(),ta.applyMatrix3(L).normalize()}l.vertexNormalsLength=qa.length;var ua=W[ia];if(void 0!==ua)for(var va=0;3>va;va++)l.uvs[va].copy(ua[va]);l.color=ka.color,l.material=X,l.z=(ma.positionScreen.z+na.positionScreen.z+oa.positionScreen.z)/3,l.renderOrder=y.renderOrder,C.elements.push(l)}}}}}else if(y instanceof THREE.Line){if(z instanceof THREE.BufferGeometry){var A=z.attributes;if(void 0!==A.position){for(var F=A.position.array,G=0,H=F.length;H>G;G+=3)Q.pushVertex(F[G],F[G+1],F[G+2]);if(null!==z.index)for(var S=z.index.array,G=0,H=S.length;H>G;G+=2)Q.pushLine(S[G],S[G+1]);else for(var wa=y instanceof THREE.LineSegments?2:1,G=0,H=F.length/3-1;H>G;G+=wa)Q.pushLine(G,G+1)}}else if(z instanceof THREE.Geometry){K.multiplyMatrices(J,r);var U=y.geometry.vertices;if(0===U.length)continue;ma=b(),ma.positionScreen.copy(U[0]).applyMatrix4(K);for(var wa=y instanceof THREE.LineSegments?2:1,$=1,_=U.length;_>$;$++)ma=b(),ma.positionScreen.copy(U[$]).applyMatrix4(K),($+1)%wa>0||(na=u[k-2],N.copy(ma.positionScreen),O.copy(na.positionScreen),g(N,O)===!0&&(N.multiplyScalar(1/N.w),O.multiplyScalar(1/O.w),n=d(),n.id=y.id,n.v1.positionScreen.copy(N),n.v2.positionScreen.copy(O),n.z=Math.max(N.z,O.z),n.renderOrder=y.renderOrder,n.material=y.material,y.material.vertexColors===THREE.VertexColors&&(n.vertexColors[0].copy(y.geometry.colors[$]),n.vertexColors[1].copy(y.geometry.colors[$-1])),C.elements.push(n)))}}else if(y instanceof THREE.Sprite){E.set(r.elements[12],r.elements[13],r.elements[14],1),E.applyMatrix4(J);var xa=1/E.w;E.z*=xa,E.z>=-1&&E.z<=1&&(p=e(),p.id=y.id,p.x=E.x*xa,p.y=E.y*xa,p.z=E.z,p.renderOrder=y.renderOrder,p.object=y,p.rotation=y.rotation,p.scale.x=y.scale.x*Math.abs(p.x-(E.x+s.projectionMatrix.elements[0])/(E.w+s.projectionMatrix.elements[12])),p.scale.y=y.scale.y*Math.abs(p.y-(E.y+s.projectionMatrix.elements[5])/(E.w+s.projectionMatrix.elements[13])),p.material=y.material,C.elements.push(p))}}return v===!0&&C.elements.sort(f),C}};